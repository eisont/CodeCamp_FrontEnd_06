// container 으로 넘기는 파일
import {Hellotext, Wrapper} from './08-BoardList.styles'


export default function BoardReadeUI(props) {

    return (
        <Wrapper>
            <Hellotext>{props.data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다!!</Hellotext>
            <div>작성자: {props.data?.fetchBoard.writer}</div>
            <div>제목: {props.data?.fetchBoard.title}</div>
            <div>내용: {props.data?.fetchBoard.contents}번 게시글에 오신 것을 환영합니다!!</div>
        </Wrapper>
    )
}
