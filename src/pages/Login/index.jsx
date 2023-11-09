import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { login } from '@pages/Login/actions';

import classes from './style.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const userInfo = {
    email: 'user@gmail.com',
    password: 'password',
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (userInfo) {
      dispatch(login(userInfo));
    }
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
              <FormattedMessage id="app_title_email_form_login" />
            </div>
            <input type="email" className={classes.input} />
          </div>
          <div className={classes.inputWrap}>
            <div className={classes.inputTitle}>
              <FormattedMessage id="app_title_password_form_login" />
            </div>
            <input type="password" className={classes.input} />
          </div>
          <button type="submit" className={classes.btn_ctn}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
