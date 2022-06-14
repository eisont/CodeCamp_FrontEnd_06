// 1. 게시물을 작성하기 위한 작성자, 비밀번호, 제목, 내용 4개의 입력창을 만들어 주세요.
// 2. 이미지를 올릴 file 태그를 만들어 주세요.

// 3. file 태그를 활용해 이미지가 변경되면 이미지가 화면에 나타나도록 만들어 보세요.
// ⇒ 단, 이미지는 빠르게 나타나야 합니다.(미리보기)
// ⇒ 힌트) FileReader() 객체를 사용해 주세요.
// 4. [저장하기] 버튼을 만들고, 해당 버튼을 클릭하면, createBoard API를 활용하여 작성자, 비밀번호, 제목, 내용, 이미지URL을 등록해 주세요.
// ⇒ 단, file이 존재하는 경우 file을 먼저 스토리지에 전송(uploadFile 활용)하고, 전송된 결과로 받은 url과 나머지 데이터들(작성자, 비밀번호, 제목, 내용)을 함께 등록합니다.

import { useMutation, gql } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { IMutation, IMutationCreateBoardArgs } from '../../../src/commons/types/generated/types';

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
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
  const [file1, setFile1] = useState<File>();
  const [imageUrl, setImageUrl] = useState('');
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert('파일이 없네요.');
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === 'string') {
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSafe = async () => {
    const result1 = await uploadFile({
      variables: { file: file1 },
    });

    console.log(result1);

    const imageUrl = result1.data?.uploadFile.url;

    const result2 = await createBoard({
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
    console.log(result2);
  };

  return (
    <>
      <input onChange={onChangeWriter} type='text' placeholder='작성자' />
      <input onChange={onChangePassword} type='password' placeholder='비밀번호' />
      <input onChange={onChangeTitle} type='text' placeholder='제목' />
      <input onChange={onChangeContents} type='text' placeholder='내용' />
      <input onChange={onChangeFile} type='file' />
      <button onClick={onClickSafe}>저장하기</button>
      <img src={imageUrl} />
    </>
  );
}
