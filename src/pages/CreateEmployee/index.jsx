import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { selectSuccess, selectUser } from '@pages/CreateEmployee/selectors';
import { createEmployee, setReset } from '@pages/CreateEmployee/actions';

import classes from './style.module.scss';

const CreateEmployee = ({ user, isSuccess }) => {
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateUser = () => {
    let result = true;
    if (user?.role !== 'admin') {
      toast.error('You Are Not an admin');
      result = false;
    }
    return result;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    const { password, confirmPassword, ...data } = inputForm;
    if (validateUser()) {
      dispatch(createEmployee({ password, ...data }));
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setInputForm({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      dispatch(setReset());
    }
  }, [dispatch, isSuccess]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperContent}>
        <div className={classes.titleText}>
          <FormattedMessage id="app_head_title_register" />
        </div>
        <form action="#" onSubmit={handleSubmitRegister} className={classes.form}>
          <div className={classes.inputWrap}>
            <div className={classes.inputTitle}>
              <FormattedMessage id="app_title_full_name_form" />
            </div>
            <input
              value={inputForm.fullName}
              name="fullName"
              onChange={handleChange}
              type="text"
              className={classes.input}
            />
          </div>
          <div className={classes.inputWrap}>
            <div className={classes.inputTitle}>
              <FormattedMessage id="app_title_email_form" />
            </div>
            <input
              value={inputForm.email}
              name="email"
              onChange={handleChange}
              type="email"
              className={classes.input}
            />
          </div>
          <div className={classes.inputWrap}>
            <div className={classes.inputTitle}>
              <FormattedMessage id="app_title_password_form" />
            </div>
            <input
              value={inputForm.password}
              type="password"
              name="password"
              onChange={handleChange}
              className={classes.input}
            />
          </div>
          <div className={classes.inputWrap}>
            <div className={classes.inputTitle}>
              <FormattedMessage id="app_title_confirm_password_form" />
            </div>
            <input
              value={inputForm.confirmPassword}
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              className={classes.input}
            />
          </div>
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
