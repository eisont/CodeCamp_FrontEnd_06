import { useMutation, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useState } from 'react';

import { CREATE_BOARD, DELETE_BOARD, FETCH_BOARDS } from './query';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 50%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Input = styled.input`
  width: 80%;
`;

export default function CreateBoard() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  // 등록하기
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  // 목록을 불러옵니다.
  const { data } = useQuery(FETCH_BOARDS);

  const onChangeWriter = (event) => {
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

  const onClickCreateBoard = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  const onClickDelteBoard = (boardId) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deleteId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter((el) => readField('_id', el) !== deleteId);
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  return (
    <Wrapper>
      <Box>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <span>{el.contents}</span>
            <button onClick={onClickDelteBoard(el._id)}>[X]</button>
          </div>
        ))}
      </Box>
      <Box>
        작성자: <Input type='text' onChange={onChangeWriter} />
        <br />
        비밀번호: <Input type='password' onChange={onChangePassword} />
        <br />
        제목: <Input type='text' onChange={onChangeTitle} />
        <br />
        내용: <Input type='text' onChange={onChangeContents} />
        <br />
        <button onClick={onClickCreateBoard}>등록하기</button>
      </Box>
    </Wrapper>
  );
}
