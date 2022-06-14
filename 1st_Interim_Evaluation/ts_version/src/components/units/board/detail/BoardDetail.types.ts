import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, 'fetchBoard'>;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickDelete: () => void;
  boardId?: any;
}

export interface IBoardDetailProps {
  data: any;
  // 좋아요 & 삭제
  onlikeCount: () => void;
  ondislikeCount: () => void;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickDelete: () => void;
}
