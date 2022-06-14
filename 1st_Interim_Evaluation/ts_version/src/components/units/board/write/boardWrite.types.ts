import { ChangeEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

// container 타입
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateBoardInput {
  title?: String;
  contents?: String;
  youtubeUrl?: String;
  boardAddress?: {
    zipcode?: String;
    address?: String;
    addressDetail?: String;
  };
  images?: string[];
}

// presenter 타입
export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  // Modal
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  // Click
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickBoard: () => void;
  // 오류 Massage
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  // State 변수
  data?: Pick<IQuery, 'fetchBoard'>;
  zipcode: string;
  address: string;
  addressDetail: string;
  // is변수
  isActive: boolean;
  isOpen: boolean;
  isEdit: boolean;
  fileUrls: string[];
}

// style 타입
export interface ISubmitButtonsProps {
  isActive: boolean;
}
