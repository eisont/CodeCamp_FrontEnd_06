import { gql, useMutation }  from "@apollo/client";
import { useState } from "react";


const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String ,$contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

const handleClickPost = () => {
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {
        const result = await callApi(
            {
                variables: { writer: mywriter, title: mytitle, contents: mycontents }
            }
        )

        console.log(result.data)
    }

    const [mywriter, setMywriter] = useState("");
    const [mytitle, setMytitle] = useState("");
    const [mycontents, setMycontents] = useState("");

    const onChangeWriter=(event)=>{setMywriter(event.target.value)}
    const onChangeTitle=(event)=>{setMytitle(event.target.value)}
    const onChangeContents=(event)=>{setMycontents(event.target.value)}

    return (
        <>
            작성자: <input type= "text" onChange={onChangeWriter}/><br/>
            제목: <input type= "text" onChange={onChangeTitle}/><br/>
            내용: <input type= "text" onChange={onChangeContents}/><br/>
            <button onClick={callGraphqlApi}>게시물 등록</button>
        </>
    )
}


export default handleClickPost