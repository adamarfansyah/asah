import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { ArrowBackIosNew, Delete } from '@mui/icons-material';
import { MenuItem, Select, Button, IconButton, FormControl } from '@mui/material';

import { getCategoriesAction } from '@pages/Home/actions';
import { addNews, deleteNews, editNews, getNewsById, resetNews, setNewsById } from '@pages/FormNews/actions';
import { selectCategories, selectNews, selectUser } from '@pages/FormNews/selector';
import { selectNewsDetail } from '@pages/DetailNews/selectors';

import InputRHF from '@components/InputRHF';

import classes from '@pages/FormNews/style.module.scss';
import 'react-quill/dist/quill.snow.css';

const FormNews = ({ news, newsDetail, user, dataCategory, intl: { formatMessage } }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const [isCreatePage, setIsCreatePage] = useState(true);

  useEffect(() => {
    dispatch(getCategoriesAction());
    if (id) {
      setIsCreatePage(false);
      newsDetail?.id ? dispatch(setNewsById(newsDetail)) : dispatch(getNewsById(id));
    } else {
      setIsCreatePage(true);
      reset({
        title: '',
        image: '',
        category: '',
        desc: '',
      });
    }
    if (id && news && parseInt(news?.employeId) != parseInt(user?.id)) {
      toast.error(formatMessage({ id: 'app_form_news_error_user_unauthorize' }));
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  }, [id, news]);

  const onSubmit = (data) => {
    if (id) {
      dispatch(
        editNews({
          ...data,
          id: news?.id,
          created_at: news?.created_at,
          updated_date: new Date().toISOString(),
          employeId: parseInt(user?.id),
          author: user?.fullName,
        })
      );
    } else {
      dispatch(
        addNews({
          ...data,
          created_at: new Date().toISOString(),
          updated_date: new Date().toISOString(),
          employeId: parseInt(user?.id),
          author: user?.fullName,
        })
      );
    }
    setTimeout(() => {
      dispatch(resetNews());
      navigate('/');
    }, 1500);
  };

  const onDelete = () => {
    dispatch(deleteNews(news?.id));
    setTimeout(() => {
      dispatch(resetNews());
      navigate('/');
    }, 1500);
  };
  return (
    <main className={classes.main}>
      <div className={classes.formWrap}>
        <h2>
          {isCreatePage ? (
            <FormattedMessage id="app_head_title_form_news_add" />
          ) : (
            <FormattedMessage id="app_head_title_form_news_edit" />
          )}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <InputRHF
            input={{
              name: 'title',
              required: formatMessage({ id: 'app_form_news_title_error_msg' }),
              type: 'text',
              label: formatMessage({ id: 'app_form_news_title' }),
              value: news?.title,
            }}
            classes={classes}
            register={register}
            errors={errors}
          />

          <InputRHF
            input={{
              name: 'image',
              required: formatMessage({ id: 'app_form_news_img_url_error_msg' }),
              type: 'text',
              label: formatMessage({ id: 'app_form_news_img_url' }),
              value: news?.image,
              pattern:
                '(https://www.|http://www.|https://|http://)?[a-zA-Z0-9]{2,}(.[a-zA-Z0-9]{2,})(.[a-zA-Z0-9]{2,})?/[a-zA-Z0-9]{2,}',
              messagePatern: formatMessage({ id: 'app_form_news_img_url_error_msg_pattern' }),
            }}
            register={register}
            classes={classes}
            errors={errors}
          />

          <FormControl variant="standard">
            <label htmlFor="category" className={classes.inputLabel}>
              <FormattedMessage id="app_form_news_category" />
            </label>
            <Controller
              control={control}
              name="category"
              rules={{ required: formatMessage({ id: 'app_form_news_category' }) }}
              defaultValue={news ? news?.category : newsDetail ? newsDetail?.category : ''}
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={onChange}
                  defaultValue=""
                  value={value}
                  label={formatMessage({ id: 'app_form_news_category' })}
                  error={errors['category'] != undefined}
                  displayEmpty
                  className={classes.inputSelect}
                >
                  <MenuItem value={null} disabled>
                    <FormattedMessage id="app_form_news_category_select_default" />
                  </MenuItem>
                  {dataCategory.map((val, key) => (
                    <MenuItem value={val.category} key={key}>
                      {val.category}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors['category'] && <span className={classes.inputLabelError}>{errors['category'].message}</span>}
          </FormControl>

          <FormControl variant="standard">
            <label htmlFor="desc" className={classes.inputLabel}>
              <FormattedMessage id="app_form_news_description" />
            </label>
            <Controller
              control={control}
              name="desc"
              rules={{ required: formatMessage({ id: 'app_form_news_description_error' }) }}
              defaultValue={news ? news?.desc : ''}
              render={({ field: { onChange, value } }) => (
                <div className={classes.quillContainer}>
                  <ReactQuill className={classes.quill} value={value} onChange={onChange} />
                </div>
              )}
            />
            {errors['desc'] && <span className={classes.inputLabelError}>{errors['desc'].message}</span>}
          </FormControl>

          <button type="submit" className={classes.buttonSubmit}>
            {isCreatePage ? (
              <FormattedMessage id="app_button_create_news" />
            ) : (
              <FormattedMessage id="app_head_title_form_news_edit" />
            )}
          </button>
        </form>

        <Button
          type="button"
          className={classes.backButton}
          startIcon={<ArrowBackIosNew />}
          size="small"
          onClick={() => {
            navigate(-1);
          }}
        >
          <FormattedMessage id="app_back_button" />
        </Button>

        {!isCreatePage && (
          <IconButton className={classes.deleteButton} onClick={onDelete}>
            <Delete fontSize="inherit" />
          </IconButton>
        )}
      </div>
    </main>
  );
};

FormNews.propTypes = {
  user: PropTypes.object,
  news: PropTypes.object,
  newsDetail: PropTypes.object,
  dataCategory: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  news: selectNews,
  newsDetail: selectNewsDetail,
  dataCategory: selectCategories,
});

export default injectIntl(connect(mapStateToProps)(FormNews));
