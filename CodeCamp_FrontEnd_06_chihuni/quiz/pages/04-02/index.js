import { gql, useMutation }  from "@apollo/client";


const CREATE_BOARD = gql`
    mutation {
        createBoard(
            writer: "김치훈",
            title: "퇴근?",
            contents:"하하하핳고프다!!!"
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

        console.log(result)
    }

    return (
        <>
            <button onClick={callGraphqlApi}>게시물 등록</button>
        </>
    )

}


export default handleClickPost
