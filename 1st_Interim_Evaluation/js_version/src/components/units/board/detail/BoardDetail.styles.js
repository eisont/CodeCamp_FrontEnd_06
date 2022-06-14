import styled from '@emotion/styled';
import { UserOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardNewTable = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 15px;
`;

export const Header = styled.div`
  width: 95%;
  margin: 0 auto;
  border-bottom: 2px solid #6400ff;
`;

export const Body = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const SectionText = styled.div`
  font-weight: 900;
  font-size: 36px;
`;
export const SectionPhoto = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Image = styled.img`
  width: 95%;
  height: 200px;
  object-fit: contain;
`;

export const User = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const UserInformation = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
`;
export const UserProfilePhoto = styled(UserOutlined)`
  font-size: 20px;
  margin-right: 20px;
  color: #6400ff;
`;
export const UserName = styled.div`
  font-size: 20px;
  font-weight: 900;
`;
export const UserProfile = styled.div`
  width: 85%;
  padding: 10px;
  overflow: hidden;
`;
export const SectionContent = styled.div`
  text-align: start;
  height: 100px;
  font-size: 16px;
`;
export const MenuButtons = styled.div`
  display: flex;
`;
export const Button = styled.button`
  width: 130px;
  height: 45px;
  margin: 87px 12px;
  font-size: 16px;
  font-weight: 600;
  display: inline;
  background: #999;
  border: 1px solid #bdbdbd;
  border-radius: 50px;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #6400ff;
  }
`;

export const WrapperHr = styled.div`
  width: 100%;
  height: 1px;
  background: #bdbdbd;
`;
