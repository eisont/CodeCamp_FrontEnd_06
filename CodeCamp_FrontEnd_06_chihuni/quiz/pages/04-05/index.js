import { gql, useMutation }  from "@apollo/client";
import { useState } from "react";


const CREATE_BOARD = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!)
    {
        createProduct(
            seller: $seller, 
            createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
    }
`

export default function handleClickPost() {

    const [callApi] = useMutation(CREATE_BOARD)
    
    const callGraphqlApi = async () => {

        const result = await callApi(
            {
                variables: { 
                    seller: mySeller, 
                    createProductInput: {
                        name: myName,
                        detail: myDetail,
                        price: myPrice
                    } 
                }
            }
        )

        console.log(result)
    }

    const [mySeller, setMySeller] = useState("")
    const [myName, setMyName] = useState("")
    const [myDetail, setMyDetail] = useState("")
    const [myPrice, setMyPrice] = useState()

    const onChangeSeller = (event) => {setMySeller(event.target.value)}
    const onChangeName= (event) => {setMyName(event.target.value)}
    const onChangeDetail = (event) => {setMyDetail(event.target.value)}
    const onChangePrice = (event) => {setMyPrice(parseInt(event.target.value))}
    
    return (
        <>
        판매자: <input type="text" onChange={onChangeSeller} /><br />
        제품 이름: <input type="text" onChange={onChangeName} /><br />
        상세설명: <input type="text" onChange={onChangeDetail} /><br />
        가격: <input type="number" onChange={onChangePrice} /><br />
            <button onClick={callGraphqlApi}>게시물 등록</button>
        </>
    )
}
