import { atom } from 'recoil';

export const isEditState = atom({
  key: 'isEditState',
  default: false,
});

// 로그인
export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
});

// 로그인 유저 정보
export const userInfoState = atom({
  key: 'userInfoState',
  default: '',
});

// export const chargePrice = atom({
//   key: 'chargePrice',
//   default: '',
// });

export const useAmount = atom({
  key: 'useAmount',
  default: 100,
});
