import { useState } from "react";

export default function SignupStatePage(){

    const [click, setClick] = useState('안녕하세요.')


    function onClick(){
        document.getElementById('ByIdclick').innerText='반갑습니다.';
    }
    
    function StateonClick(){
        setClick('반갑습니다.')
    }

    return (
        <>
            <><h2>state를 활용한 안녕하세요 => 반갑습니다 로 변경하기</h2>
                <button id="ByIdclick" onClick={onClick}>안녕하세요</button>
                
                <button onClick={StateonClick}>{click}</button>
            </>
        </>
    )
}