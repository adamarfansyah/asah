import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { login } from '@pages/Login/actions';

import { useState } from 'react';
import classes from './style.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(login(inputForm));
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperContent}>
        <div className={classes.titleText}>
          <FormattedMessage id="app_head_title_login" />
        </div>
        <div className={classes.subTitle}>
          <FormattedMessage id="app_sub_title_login" />
        </div>
        <form action="" onSubmit={handleSubmitLogin} className={classes.form}>
          <div className={classes.inputWrap}>
            <div className={classes.inputTitle}>
              <FormattedMessage id="app_title_email_form" />
            </div>
            <input name="email" onChange={handleChange} type="email" className={classes.input} />
          </div>
          <div className={classes.inputWrap}>
            <div className={classes.inputTitle}>
              <FormattedMessage id="app_title_password_form" />
            </div>
            <input type="password" name="password" onChange={handleChange} className={classes.input} />
          </div>
          <button type="submit" className={classes.btn_ctn}>
            <FormattedMessage id="app_title_button_confirm_login_register" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
