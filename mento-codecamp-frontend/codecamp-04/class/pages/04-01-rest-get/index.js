import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [aaa, setAaa] = useState("안녕하세요");

  // 만약 화살표함수라면,
  // const zzz = async () => {
  //      await axios.get('')
  // }
  async function zzz() {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    console.log(result.data.title);
    setAaa(result.data.title);
  }

  // 호이스팅 문제점
  // zzz()

  // function zzz(){
  //     console.log("asdfasdfa")
  // }

  return (
    <>
      <div>{aaa}</div>
      <button onClick={zzz}>REST-API 요청하기!!</button>
    </>
  );
}
