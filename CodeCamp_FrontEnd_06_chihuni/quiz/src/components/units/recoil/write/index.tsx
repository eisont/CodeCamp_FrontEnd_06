// write 페이지에서 props로 받지 않고, useRecoilState를 통해 받아주세요.

import { useRecoilState } from 'recoil';
import { isEditState } from '../../../../commons/store';

export default function GlobalStateWrite() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <>{isEdit ? '등록하기' : '수정하기'}</>;
}
