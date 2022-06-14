import { IBoardDetailUIProps } from './BoardDetail.types';
import * as S from './BoardDetail.styles';

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.BoardNewTable>
          <S.Header>
            <S.SectionText>{props.data?.fetchBoard?.title}</S.SectionText>
          </S.Header>
          <S.Body>
            <S.SectionPhoto>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el) // 빈 사진은 보여주지 말아줘
                .map((el: string) => (
                  <S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
                ))}
            </S.SectionPhoto>
          </S.Body>

          <S.User>
            <S.UserInformation>
              <S.UserProfilePhoto />
              <S.UserName>{props.data?.fetchBoard?.writer}</S.UserName>
            </S.UserInformation>

            <S.UserProfile>
              <S.SectionContent>{props.data?.fetchBoard?.contents}</S.SectionContent>
            </S.UserProfile>
          </S.User>
        </S.BoardNewTable>

        <S.MenuButtons>
          <S.Button onClick={props.onClickMoveToBoardList}>글목록</S.Button>
          <S.Button onClick={props.onClickMoveToBoardEdit}>수정</S.Button>
          <S.Button id={props.boardId} onClick={props.onClickDelete}>
            삭제
          </S.Button>
        </S.MenuButtons>
        <S.WrapperHr></S.WrapperHr>
      </S.Wrapper>
    </>
  );
}
