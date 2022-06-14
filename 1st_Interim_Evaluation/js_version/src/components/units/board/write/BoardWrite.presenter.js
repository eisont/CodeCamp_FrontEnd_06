// 등록하기 presenter
import * as S from './BoardWrite.styles';
import { v4 as uuidv4 } from 'uuid';
import Uploads01 from '../../../../commons/uploads/01/Uploads01.containder';

export default function BoardWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>{props.isEdit ? '새 글 수정' : '새 글 작성'}</S.Title>
        {/* 제목 */}
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject type='text' placeholder='(필수) 제목을 작성해주세요.' onChange={props.onChangeTitle} />
          <S.Error>{props.titleError}</S.Error>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents placeholder='(필수) 내용을 작성해주세요.' onChange={props.onChangeContents} />
          <S.Error>{props.contentsError}</S.Error>
        </S.InputWrapper>

        <S.ImageWrapper>
          <S.ImageTitle>사진 첨부</S.ImageTitle>
          {props.fileUrls.map((el, index) => (
            <Uploads01 key={uuidv4()} index={index} fileUrl={el} onChangeFileUrls={props.onChangeFileUrls} />
          ))}
          {/* <GraphqlMutationPageUI fileRef /> */}
        </S.ImageWrapper>

        <S.WriterWrapper>
          {/* 작성자 */}
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              type='text'
              placeholder='(필수) 이름을 입력해주세요.'
              onChange={props.onChangeWriter}
              disabled={!!props.data?.fetchBoard.writer}
              defaultValue={props.data?.fetchBoard.writer || ''}
            />{' '}
            <S.Error>{props.writerError}</S.Error>
          </S.InputWrapper>
          {/* 비밀번호 */}
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password type='password' placeholder='(필수) 비밀번호를 작성해주세요.' onChange={props.onChangePassword} />
            <S.Error>{props.passwordError}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
      </S.Box>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit} isActive={props.isEdit ? true : props.isActive}>
          {props.isEdit ? '수정하기' : '등록하기'}
        </S.SubmitButton>
        <S.SubmitButton onClick={props.onClickBoard}>취소</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
