// 여기는 프리젠터 컴포넌트

import {SellerInput, SubmitButton} from './BoardSeller.styles'

export default function BoardSellerUI(props){
    return (
        <div>
            {/* <div>{data}</div> */}
            <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
            판매자: <SellerInput type="text" onChange={props.onChangeSeller} /><br />
            제품 이름: <input type="text" onChange={props.onChangeName} /><br />
            상세 내용: <input type="text" onChange={props.onChangeDetail} /><br />
            가격: <input type="number" onChange={props.onChangePrice} /><br />
            <SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate} isActive={props.isActive}>
                {props.isEdit ? "수정" : "등록"}하기
            </SubmitButton>
        </div>
    )
}
