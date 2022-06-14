import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardDeleteUIProps {
  data?: Pick<IQuery, 'fetchBoard'> | undefined;
  onClickMoveToBoardList: () => void;
  onClickDelete: () => void;
  boardId: any;
  onChangePassword: () => void;
}

export interface IBoardDetailProps {
  data?: Pick<IQuery, 'fetchBoard'> | undefined;
  onClickMoveToBoardList: () => void;
  onClickDelete: () => void;
  onChangePassword: () => void;
}
