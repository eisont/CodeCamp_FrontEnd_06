import { EditOutlined, LikeOutlined, SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TableTop = styled.div`
  // background: #dbdbdb;
  margin: 3vh 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #fff;
  border-radius: 15px;
  margin: 10px 0;
`;

export const ColumnTitle = styled.div`
  width: 80%;
  padding: 0 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: #6400ff;
  }
`;
export const ColumnBasic = styled.div`
  width: 15%;
  color: #999;
  font-size: 16px;
`;

export const Paginations01 = styled.div``;
export const PencilIcon = styled(EditOutlined)``;
export const PageList = styled(EditOutlined)``;
