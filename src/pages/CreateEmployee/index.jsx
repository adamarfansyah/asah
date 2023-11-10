import { FormattedMessage, useIntl } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import config from '@config/index';

import { selectSuccess } from '@pages/CreateEmployee/selectors';
import { createEmployee, setReset } from '@pages/CreateEmployee/actions';

import { selectUser } from '@containers/Client/selectors';

import InputRHF from '@components/InputRHF';

import classes from './style.module.scss';

const CreateEmployee = ({ user, isSuccess }) => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const validateUser = () => {
    let result = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user?.role !== config.role.admin) {
      toast.error('You Are Not an admin');
      result = false;
    }
    if (getValues().password !== getValues().confirmPassword) {
      toast.error('Password and confirm password must be same');
      result = false;
    }
    if (!emailRegex.test(getValues().email)) {
      toast.error(intl.formatMessage({ id: 'app_error_message_email' }));
      result = false;
    }
    return result;
  };
  useEffect(() => {
    if (isSuccess) {
      reset({ fullName: '', email: '', password: '', confirmPassword: '' });
      dispatch(setReset());
    }
  }, [dispatch, isSuccess, reset]);

  const onSubmit = (data) => {
    const role = config.role.employee;
    const { password, confirmPassword, ...rest } = data;
    if (validateUser()) {
      dispatch(createEmployee({ password, role, ...rest }));
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperContent}>
        <div className={classes.titleText}>
          <FormattedMessage id="app_head_title_register" />
        </div>
        <form action="#" onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <InputRHF
            register={register}
            input={{
              name: 'fullName',
              required: 'Full Name is required!',
              label: intl.formatMessage({ id: 'app_title_full_name_form' }),
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
              minLength: 8,
              messageMin: intl.formatMessage({ id: 'app_error_message_minLenght_password' }),
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
              name: 'confirmPassword',
              required: 'Confirm Password is required!',
              label: intl.formatMessage({ id: 'app_title_password_form' }),
              type: 'password',
              minLength: 8,
              messageMin: intl.formatMessage({ id: 'app_error_message_minLenght_password' }),
            }}
            errors={errors}
            classes={{
              inputContainer: classes.inputWrap,
              inputLabel: classes.inputTitle,
              input: classes.input,
              inputLabelError: classes.errorInput,
            }}
          />
          <div className={classes.btnWrapper}>
            <button type="button" className={classes.btn_back}>
              <Link to="/">
                <FormattedMessage id="app_title_button_back_to_home" />
              </Link>
            </button>
            <button type="submit" className={classes.btn_ctn}>
              <FormattedMessage id="app_title_button_confirm_login_register" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
CreateEmployee.propTypes = {
  user: PropTypes.object,
  isSuccess: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  isSuccess: selectSuccess,
});

export default connect(mapStateToProps)(CreateEmployee);
