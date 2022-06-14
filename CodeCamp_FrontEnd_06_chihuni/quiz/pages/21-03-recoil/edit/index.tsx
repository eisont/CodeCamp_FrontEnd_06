// edit 페이지에서 props로 넘겨주지 않고, RecoilRoot를 통해 넘겨주세요.

import { RecoilRoot } from 'recoil';
import GlobalStateWrite from '../../../src/components/units/recoil/write';

export default function GlobalStatePage() {
  return (
    <RecoilRoot>
      <GlobalStateWrite />
    </RecoilRoot>
  );
}
