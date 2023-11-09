import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const Login = () => (
  <div className={classes.wrapper}>
    <div>
      <FormattedMessage id="app_head_title_login" />
    </div>
    <form action="">
      <div>
        <div>
          <FormattedMessage id="app_title_email_form_login" />
        </div>
        <input type="email" />
      </div>
      <div>
        <div>
          <FormattedMessage id="app_title_password_form_login" />
        </div>
        <input type="password" />
      </div>
    </form>
  </div>
);

export default Login;
