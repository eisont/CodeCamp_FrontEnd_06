import { useState } from "react";

export default function SignupStatePage(){
    const [check, setCheck] = useState('000000')


    function pressedBtn(){
        document.getElementById('auth').innerText='111111';
    }

    function pressedStateBtn(){
        setCheck(222222)
    }

    return (
        <>
            <><h2>state를 활용한 인증번호 생성하기</h2>
                <div>
                    <div id="auth">000000</div>
                    <button id="checkBt_1" onClick={pressedBtn}>인증번호 전송</button>
                </div>
            </>
            <>
                <div>
                    <div>{check}</div>
                    <button onClick={pressedStateBtn}>인증번호 전송</button>
                </div>
            </>
        </>
    )
}