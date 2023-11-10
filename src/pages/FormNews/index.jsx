import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { MenuItem, Select, Button, IconButton } from '@mui/material';
import { ArrowBackIosNew, Delete } from '@mui/icons-material';

import { getCategoriesAction } from '@pages/Home/actions';
import { addNews, deleteNews, editNews, getNewsById, resetNews, setNewsById } from '@pages/FormNews/actions';
import { selectCategories, selectNews, selectUser } from '@pages/FormNews/selector';
import { selectNewsDetail } from '@pages/DetailNews/selectors';

import ControllerRHF from '@components/ContainerRHF';
import InputRHF from '@components/InputRHF';

import classes from '@pages/FormNews/style.module.scss';
import 'react-quill/dist/quill.snow.css';

const FormNews = ({ news, user, dataCategory, intl: { formatMessage } }) => {
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
    if (id && news?.employeId != user?.id) {
      toast.error(formatMessage({ id: 'app_form_news_error_user_unauthorize' }));
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } else if (id) {
      setIsCreatePage(false);
      newsDetail ? dispatch(setNewsById(newsDetail)) : dispatch(getNewsById(id));
    } else {
      setIsCreatePage(true);
      reset({
        title: '',
        image: '',
        category: '',
        desc: '',
      });
    }
  }, [id]);

  const onSubmit = (data) => {
    if (id) {
      dispatch(
        editNews({
          ...data,
          id: news?.id,
          created_at: news?.created_at,
          updated_date: new Date().toISOString(),
          employeId: user?.id,
          author: user?.fullName,
        })
      );
    } else {
      dispatch(
        addNews({
          ...data,
          created_at: new Date().toISOString(),
          updated_date: new Date().toISOString(),
          employeId: user?.id,
          author: user?.fullName,
        })
      );
    }
    setTimeout(() => {
      dispatch(resetNews());
      navigate(-1);
    }, 1500);
  };

  const onDelete = () => {
    dispatch(deleteNews(news?.id));
    setTimeout(() => {
      dispatch(resetNews());
      navigate(-1);
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
              pattern: false,
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
              pattern: false,
              type: 'text',
              label: formatMessage({ id: 'app_form_news_img_url' }),
              value: news?.image,
            }}
            register={register}
            classes={classes}
            errors={errors}
          />

          <ControllerRHF
            input={{
              label: formatMessage({ id: 'app_form_news_category' }),
              name: 'category',
              required: formatMessage({ id: 'app_form_news_category_error' }),
              defaultValue: news ? news?.category : '',
            }}
            classes={classes}
            control={control}
            errors={errors}
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

          <ControllerRHF
            input={{
              label: formatMessage({ id: 'app_form_news_description' }),
              name: 'desc',
              required: formatMessage({ id: 'app_form_news_description_error' }),
              defaultValue: news?.desc,
            }}
            classes={classes}
            control={control}
            errors={errors}
            render={({ field: { onChange, value } }) => (
              <div className={classes.quillContainer}>
                <ReactQuill className={classes.quill} value={value} onChange={onChange} />
              </div>
            )}
          />

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
