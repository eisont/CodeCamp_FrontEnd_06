import * as S from './BoardList.styles';
import { getDate } from '../../../../commons/libraries/utils';
import { IBoardListUIProps } from './BoardList.types';
import InfiniteScroll from 'react-infinite-scroller';

export default function BoardListUI(props: IBoardListUIProps) {
  if (!props.data) return <div />;
  return (
    <S.Wrapper>
      <S.TableTop>
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
          {props.data?.fetchBoards.map((el) => (
            <S.Row key={el._id}>
              <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title}
              </S.ColumnTitle>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          ))}
        </InfiniteScroll>
      </S.TableTop>
    </S.Wrapper>
  );
}
