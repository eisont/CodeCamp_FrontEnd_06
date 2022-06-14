// 여기는 상세보기 페이지
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
query fetchProduct($productId:ID){
    fetchProduct(productId: $productId){
        _id
        seller
        name
        detail
        price
    }
}
`

export default function StaticRoutedPage(){
    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT,{
        variables:{productId:`${router.query.myproductId}`}
    })

    console.log(data)

    const onClickMove = () => {
        router.push(`/08-product/${router.query.myproductId}/edit`)
    }

    return (
        <div>
        <h1>{data?.fetchProduct.name}</h1>
            <div>판매자:{data?.fetchProduct.seller}</div>
            <div>제품명:{data ? (data?.fetchProduct.name):('제품명 정보 받아오는 중...')}</div>
            <div>상세내용:{data ? (data?.fetchProduct.detail):('loading...')}</div>
            <div>가격:{data ? (data?.fetchProduct.price):('loading...')}</div>
            <button onClick={onClickMove}>수정하러 이동하기</button>
        </div>
    )

}