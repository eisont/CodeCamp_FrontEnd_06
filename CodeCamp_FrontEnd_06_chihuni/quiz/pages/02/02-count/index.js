import { useState } from "react";

export default function SignupStatePage(){
    const [counter, setCounter] = useState(0)

    function CounterClick(){
        let result = Number(document.getElementById('count').innerText)+1
        document.getElementById('count').innerText= result;
    }

    function CounterStateClick(){
        setCounter(counter+1)
    }



    return (
        <>
            <><h2>state를 활용한 카운터 만들기</h2>
                <div id="count">0</div>
                <button onClick={CounterClick}>카운터올리기</button>
                <div>{counter}</div>
                <button onClick={CounterStateClick}>카운터올리기</button>
            </>
        </>
    )
}