import { USER_LOGIN } from '@pages/Login/constants';

export const login = (data) => ({
  type: USER_LOGIN,
  data,
});
