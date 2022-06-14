import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import _ from 'lodash';
import { ChangeEvent, useState } from 'react';
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types';
import { v4 as uuidv4 } from 'uuid';

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #dbdbdb;
`;
const InputBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const ListBox = styled.div`
  width: 70%;
  height: 100%;
`;
const MyRow = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
`;
const MyColumn = styled.div`
  width: 45%;
  overflow: hidden;
  text-align: center;
  font-size: 16px;
  font-weight: 900;
`;
const PageNation = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  background: #fff;
`;

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? 'blue' : '#fff')};
`;

export default function ImageUploadPage() {
  // const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');

  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const getDeBounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDeBounce(event.target.value);
  };

  // const ClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };
  const onClickPage = (ecent) => {
    refetch({ page: Number(ecent.target.id) });
  };

  return (
    <Wrapper>
      <InputBox>
        <input type='text' onChange={onChangeSearch} placeholder='무엇을 검색하고 싶니?' />
        {/* <button onClick={ClickSearch}>검색</button> */}
      </InputBox>
      <ListBox>
        {data?.fetchBoards.map((el: any) => (
          <MyRow key={el.id}>
            <MyColumn>
              {el.title
                .replaceAll(keyword, `#$%${keyword}#$%`)
                .split('#$%')
                .map((el: any) => (
                  <Word key={uuidv4()} isMatched={keyword === el}>
                    {el}
                  </Word>
                ))}
            </MyColumn>
            {/* <MyColumn>{el.writer}</MyColumn> */}
          </MyRow>
        ))}
        <PageNation>
          {new Array(10).fill(1).map((_, index) => (
            <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
              {index + 1}
            </span>
          ))}
        </PageNation>
      </ListBox>
    </Wrapper>
  );
}
