import * as S from './BoardDelete.styles';

export default function BoardDetailUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Box>
          <S.Header>
            <S.SectionText>게시글 삭제</S.SectionText>
          </S.Header>
          <S.InputBox>
            비밀번호 입력: <S.PasswordInput onChange={props.onChangePassword}></S.PasswordInput>
          </S.InputBox>
        </S.Box>
        <S.MenuButtons>
          <S.Button id={props.boardId} onClick={props.onClickDelete}>
            삭제
          </S.Button>
          <S.Button onClick={props.onClickMoveToBoardList}>취소</S.Button>
        </S.MenuButtons>
      </S.Wrapper>
    </>
  );
}
