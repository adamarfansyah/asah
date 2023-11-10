import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { login } from '@pages/Login/actions';

import InputRHF from '@components/InputRHF';

import classes from './style.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(getValues().email)) {
      toast.error(intl.formatMessage({ id: 'app_error_message_email' }));
      return;
    }
    dispatch(login(data));
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
        <form action="#" onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <InputRHF
            register={register}
            input={{
              name: 'email',
              required: 'Email is required!',
              label: intl.formatMessage({ id: 'app_title_email_form' }),
              type: 'text',
            }}
            errors={errors}
            classes={{
              inputContainer: classes.inputWrap,
              inputLabel: classes.inputTitle,
              input: classes.input,
              inputLabelError: classes.errorInput,
            }}
          />
          <InputRHF
            register={register}
            input={{
              name: 'password',
              required: 'Password is required!',
              label: intl.formatMessage({ id: 'app_title_password_form' }),
              type: 'password',
            }}
            errors={errors}
            classes={{
              inputContainer: classes.inputWrap,
              inputLabel: classes.inputTitle,
              input: classes.input,
              inputLabelError: classes.errorInput,
            }}
          />

          <button type="submit" className={classes.btn_ctn}>
            <FormattedMessage id="app_title_button_confirm_login_register" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
