import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  object-fit: contain;
  height: 30vh;
`;
const ImgButton = styled.button`
  width: 200px;
`;
const Count = styled.p``;

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState('');
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    setCount((prev) => prev + 1);
    // setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogUrl(result.data.message);
    };
    aaa();
  }, [count]);

  return (
    <Wrapper>
      <Img src={dogUrl} />
      <ImgButton onClick={onClickButton}>이미지체인지</ImgButton>
      <Count>{count}</Count>
    </Wrapper>
  );
}
