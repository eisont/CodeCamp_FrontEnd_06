import { useState } from "react";

export default function SignupStatePage(){
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordch, setPasswordch] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        console.log(event.target.value)
        // event.target       => 태그전체 <input type="text" ...
        // event.target.value => 우리가 입력한 값 a@a.com
        setEmail(event.target.value)
    }

    // function onChangePassword(event){
    //     setPassword(event.target.value)
    //     console.log(password)
    // }
    
    function onChangePasswordCh(event){
        setPasswordch(event.target.value)
        console.log(passwordch)
    }
    function onClickSignup(){
        if(email.includes("@") === false){
            // alert("이메일이 올바르지 않습니다!! @가 없음!!")
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
        } else {
            alert("회원가입을 축하합니다!!!")
            setEmailError()
        }
        if(password !== passwordch){
            setPasswordError('비밀번호가 올바르지 않습니다.')
        } else {
            setPasswordError()
        }
    }

    return (
        <>
            <><h2>state를 활용한 회원가입 폼 만들기</h2>

                <div>

                    이메일: <input type="text" onChange={onChangeEmail} /><br />
                    <div>{emailError}</div>
                    비밀번호: <input type="password" onChange={(e) => setPassword(e.target.value)} /><br/>
                    비밀번호 확인: <input type="password" onChange={onChangePasswordCh} /><br/>
                    <div>{passwordError}</div>

                    <button onClick={onClickSignup}>가입하기</button>

                </div>
            </>
        </>
    )
}