// graphql 요청에 필요한 도구 불러오기
import { useMutation, gql } from "@apollo/client";
import { useState } from 'react'

// graphql 생성
const CREATE_PRODUCT = gql`
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

// 함수 생성
const handleClickPost = () => {


    const callGraphqlApi = async () => {
        const [CreateProduct] = useMutation(CREATE_PRODUCT)

        const result = await CreateProduct(
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

export default handleClickPost