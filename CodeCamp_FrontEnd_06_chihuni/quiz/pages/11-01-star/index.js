import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState();


  const handleChange = (value) => {
    setValue(value);
    console.log(event)
    if (event === 3) {
      alert("경고입니다.")
    }
  }; 


  return( 
  <>
    <Rate onChange={handleChange} value={value} />
    <div>{value}점</div>
  </>
  )
}
