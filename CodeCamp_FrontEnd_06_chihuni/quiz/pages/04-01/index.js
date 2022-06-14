import { gql, useMutation }  from "@apollo/client";


const CREATE_BOARD = gql`
    mutation {
        createBoard(
            writer: "김치훈",
            title: "이해?",
            contents:"그게 뭐야?"
        ){
            _id
            number
            message
        }
    }
`
// const CREATE_BOARD = gql`
//     mutation {
//         createBoard (
//             createBoardInput: {
//                 writer:"김치훈",
//                 password:"1234",
//                 title:"퇴근",
//                 contents:"하하하핳고프다!!!"
//             }
//         ){
//         _id
//         title
//         contents
//         likeCount
//         dislikeCount
//         createdAt
//         updatedAt
//         }
//     }
// `



const handleClickPost = () => {
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {
        const result = await callApi()
    }

    return (
        <>
            <button onClick={callGraphqlApi}>게시물 등록</button>
        </>
    )

}


export default handleClickPost




//fetch를 통해서 올라가 있는 데이터를 확인했습니다.
// {
//     "data": {
//         "fetchBoard": {
//             "number": 83646,
//             "writer": "김치훈",
//             "title": "이해?",
//             "contents": "그게 뭐야?",
//             "like": 0,
//             "createdAt": "2022-03-19T01:48:35.036Z"
//         }
//     }
// }