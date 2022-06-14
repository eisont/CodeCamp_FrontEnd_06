export default function BoardWriteUI(props) {

    return (
        <>
            <button onClick={props.onClickMove1}>83번 게시물로 이동하기!!!</button>
            {/*onClick 에 함수 적용하는 것 === 바인딩 */}
            <button onClick={props.onClickMove2}>1212번 게시물로 이동하기!!!</button>
            <button onClick={props.onClickMove3}>83013번 게시물로 이동하기!!!</button>
        </>
    )
}