import styled from '@emotion/styled';
import { Calendar } from 'antd';
import { useState } from 'react';

const getDate = (date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

const Box = styled.div`
  width: 300px;
  margin: 0 auto;
`;
const AAA = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
`;

export default function LibraryYoutubePage() {

  const [myaaa, setMyaaa]= useState("")
  // 변수를 담기 위해 useState를 사용합니다.

function onPanelChange(value, mode) {
  // setMyaaa(getDate(value, mode));
  setMyaaa(getDate(value, mode));
  // value.split()
}

  return (
    <>
      <Box>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </Box>
      <AAA>{myaaa}</AAA>
      <AAA>{myaaa.slice(4,7)}</AAA>
    </>
  );
}
