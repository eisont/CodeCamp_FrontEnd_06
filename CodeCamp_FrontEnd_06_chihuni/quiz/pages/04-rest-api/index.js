import axios from 'axios'


export default function RestGetPage (){

    async function callRestApi(){
        const result = await axios.get("https://koreanjson.com/users")

        console.log(result.data)
    }


    return (
        <>
            <button onClick={callRestApi}>REST-API 요청하기!!!</button>
        </>
    )

}