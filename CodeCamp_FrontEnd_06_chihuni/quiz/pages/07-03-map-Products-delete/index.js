import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { Fragment } from 'react'

const FETCH_PRODUCTS = gql`
query fetchProducts($page: Int){
    fetchProducts(page: $page){
        _id
        seller
        name
        detail
        price
        createdAt
    }
}
`
// 클릭을 했을때
const DELETE_BOARD = gql`
mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId){
        message
    }
}
`

const Row = styled.div`
    width: 70%;
    margin: 0 auto; 
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #000;
    // justify-contents: space-between;
`
const Column = styled.div`
    width: 20%;
`

export default function MapBoardPage(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_PRODUCTS)

    const onClickDelete = (event) => {
        deleteBoard({
            variables: { productId:`${event.target.id}`},
            refetchQueries: [{ query: FETCH_PRODUCTS }]
        })
    }

    return (
        <Fragment> {/* fregment */}
            {data?.fetchProducts.map((el) => (
            // {data?.fetchProducts.map((el,index) => (
                // index를 키로 지정하면 안됩니다. 오류 생깁니다. 
                <Row key={el._id}> 
                {/* <Row key={index}>  */}
                    <Column><input type = "checkbox"/></Column>
                    <Column>{el.seller}</Column>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}</Column>
                    <Column>
                        <button id={el._id} onClick={onClickDelete}>삭제</button>
                        {/* onClickDelete === 이벤트 헨들러 */}
                    </Column>
                </Row>
            ))}
        </Fragment>
    )
}