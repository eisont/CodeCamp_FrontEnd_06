import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isEditState } from '../../../src/commons/store';
import GlobalStateWrite from '../../../src/components/units/recoil/write';

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <GlobalStateWrite />;
}
