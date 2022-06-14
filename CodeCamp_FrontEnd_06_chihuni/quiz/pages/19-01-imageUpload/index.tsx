import { gql, useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import { Modal } from 'antd';
import { ChangeEvent, useRef, useState } from 'react';
import { IMutation, IMutationCreateBoardArgs, IMutationUploadFileArgs } from '../../src/commons/types/generated/types';
import { checkFileValidation } from '../../src/commons/libraries/validation';
import { LikeOutlined } from '@ant-design/icons';

const InputBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Img = styled.img`
  height: 40vh;
  padding: 2vh;
`;
const LikeBt = styled(LikeOutlined)`
  font-size: 5vh;
  height: 5vh;
  &:hover {
    transition: 0.2s;
    color: #f00;
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickImage = () => {
    fileRef.current?.click();
  };

  const [writer, setMyWriter] = useState('');
  const [password, setMyPassword] = useState('');
  const [title, setMyTitle] = useState('');
  const [contents, setMyContents] = useState('');
  const [imageUrl, setImageUrl] = useState<string | undefined>('');
  const [data, setData] = useState('');

  const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE);
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD);

  const onChangeWriter = (event: any) => {
    setMyWriter(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setMyPassword(event.target.value);
  };
  const onChangeTitle = (event: any) => {
    setMyTitle(event.target.value);
  };
  const onChangeContents = (event: any) => {
    setMyContents(event.target.value);
  };

  const callGraphqlApi = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    // console.log(result);
    console.log(result.data.createBoard._id);
    // setData(result.data.createBoard.message);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Wrapper>
      <InputBox>
        <input type='text' id='writer' onChange={onChangeWriter} placeholder='작성자' />
        <input type='password' id='password' onChange={onChangePassword} placeholder='비밀번호' />
        <input type='text' id='title' onChange={onChangeTitle} placeholder='제목' />
        <input type='text' id='contents' onChange={onChangeContents} placeholder='내용' />
        <input type='file' style={{ display: 'none' }} onChange={onChangeFile} ref={fileRef} />
        <button onClick={callGraphqlApi}>저장하기</button>
      </InputBox>
      <LikeBt onClick={onClickImage} />
      <Img src={`https://storage.googleapis.com/${imageUrl}`} />
    </Wrapper>
  );
}
