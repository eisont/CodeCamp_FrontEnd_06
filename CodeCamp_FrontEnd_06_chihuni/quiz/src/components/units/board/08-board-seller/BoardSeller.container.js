// 여기는 컨테이너 컴포넌트
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import BoardSellerUI from './BoardSeller.presenter'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './BoardSeller.queries'
import { useRouter } from 'next/router'

export default function BoardWrite(props){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    
    // const [data, setData] = useState("")

    const [mySeller, setMySeller] = useState("")
    const [myName, setMyName] = useState("")
    const [myDetail, setMyDetail] = useState("")
    const [myPrice, setMyPrice] = useState()
    
    const [CreateProduct] = useMutation(CREATE_PRODUCT)
    const [UpdateProduct] = useMutation(UPDATE_PRODUCT)

    const onClickCreate = async () => {
        const result = await CreateProduct({
            variables: { 
                seller: mySeller, 
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: myPrice
                } 
            }
            // 백엔드 양식을 사용하기 위한 양식 전환
        })
        console.log(result.data)
        console.log(result.data.createProduct.message)
        console.log(result.data.createProduct.number)
        console.log(result.data.createProduct._id)
        alert("게시글 등록에 성공하였습니다!!!")
        router.push(`/08-product/${result.data.createProduct._id}`)
        // result에 담긴 데이터(_id) 보내기
    }

    const onClickUpdate = async () => {
        await UpdateProduct({
            // variables: { productId: myproductId, updateProductInput: {
            variables: { productId: `${router.query.myproductId}`, updateProductInput: {
                name: myName,
                detail: myDetail,
                price: myPrice
            }}
        })
        alert("게시글 수정에 성공하였습니다!!!")
        router.push(`/08-product/${router.query.myproductId}`)
        
    }


    const onChangeSeller = (event) => {
        setMySeller(event.target.value)
        if(event.target.value !== "" && myName !== "" && myDetail !== "" && myPrice !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    const onChangeName = (event) => {
        setMyName(event.target.value)
        if(mySeller !== "" && event.target.value !== "" && myDetail !== "" && myPrice !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    const onChangeDetail = (event) => {
        setMyDetail(event.target.value)
        if(mySeller !== "" && myName !== "" && event.target.value !== "" && myPrice !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    const onChangePrice = (event) => {
        setMyPrice(parseInt(event.target.value))
        if(mySeller !== "" && myName !== "" && myDetail !== "" && event.target.value !== "" ){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return (
        <BoardSellerUI 
            onChangeSeller={onChangeSeller} 
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            onClickUpdate={onClickUpdate}
            onClickCreate={onClickCreate}
            isActive={isActive}
            isEdit={props.isEdit}
        />
    )
}