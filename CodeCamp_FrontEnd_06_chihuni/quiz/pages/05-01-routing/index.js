import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const CREATE_BOARD = gql`
    mutation createProduct($seller:String, $createProductInput:CreateProductInput!){
        createProduct(seller:$seller, createProductInput:$createProductInput){
            _id
            number
            message
            }
        }
    `

export default function StaticRoutingPage(){
    const router = useRouter()
    
    const [mySeller, setMySeller] = useState("")
    const [myProduct, setMyProduct] = useState("")
    const [myDetail, setMyDetail] = useState("")
    const [myPrice, setMyPrice] = useState()
    // 숫자로 저장하기 위해 ""을 사용 안합니다.

    const [createProduct] = useMutation(CREATE_BOARD)
    
    //게시물 등록 버튼을 클릭했을때 실행되는 함수 안에서 라우터 객체 실행
    const callGraphqlApi = async () => {
        try{
            const result = await createProduct({ 
                variables: {
                    seller: mySeller, 
                    createProductInput:{
                        name: myProduct, 
                        detail: myDetail, 
                        price: myPrice
                    }
                } 
        })
        console.log(result.data.createProduct._id)
        //값을 제대로 받아오는지 확인합니다.
        alert("게시물 등록에 성공했습니다.")
        alert("상세페이지로 이동합니다.")
        router.push(`/05-02-routed/${result.data.createProduct._id}`)
        }catch(error){
            console.log(error.message)
        }
    }
    const onChangeSeller = (event) =>{setMySeller(event.target.value)}
    const onChangeProduct = (event) =>{setMyProduct(event.target.value)}
    const onChangeTitle = (event) =>{setMyDetail(event.target.value)}
    const onChangeContents = (event) =>{setMyPrice(parseInt(event.target.value))}
    // parseInt 정수로 보내겠습니다.


    return(
        <div>
            판매자: <input type="text" onChange={onChangeSeller}/><br/>
            제품명: <input type="text" onChange={onChangeProduct}/><br/>
            상세내용: <input type="text" onChange={onChangeTitle}/><br/>
            가격: <input type="text" onChange={onChangeContents}/><br/>
            <button onClick={callGraphqlApi}> 등록하기 </button>
        </div>
    )
}

