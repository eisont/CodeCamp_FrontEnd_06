import { useRecoilState } from 'recoil';
import { useAmount } from '../../../../src/commons/store';

export default function PaymentCompletePage() {
  const [amount] = useRecoilState(useAmount);

  return <>{amount}결제 완료!!!</>;
}
