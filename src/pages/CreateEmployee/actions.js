import { CREATE_EMPLOYEE, SET_RESET, SET_SUCCESS } from '@pages/CreateEmployee/constants';

export const createEmployee = (data) => ({
  type: CREATE_EMPLOYEE,
  data,
});
export const setSuccess = () => ({
  type: SET_SUCCESS,
});
export const setReset = () => ({
  type: SET_RESET,
});
