import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import formattedDate from '@utils/formattedDate';

import { selectUser } from '@containers/Client/selectors';
import { selectIsLoading, selectNewsDetail } from './selectors';

import { getNewsDetailAction } from './actions';
import classes from './style.module.scss';

const DetailNews = ({ newsDetail, isLoading, user }) => {
  const navigate = useNavigate();
  const { newsId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsDetailAction(newsId));
  }, [dispatch, newsId]);

  const goToUpdate = () => {
    navigate(`/news/edit/${newsDetail.id}`);
  };

  if (isLoading) return <h1>Loading....</h1>;

  return (
    <div className={classes.detailNews}>
      <div className={classes.wrapper}>
        <div>
          <div className={classes.author}>{newsDetail.author}</div>
          <div className={classes.category}>{newsDetail.category}</div>
          <div className={classes.title}>{newsDetail.title}</div>
          <div className={classes.date}>{formattedDate(newsDetail.created_at)}</div>
        </div>
        {user ? (
          <div className={classes.update} onClick={goToUpdate}>
            Update
          </div>
        ) : null}
      </div>
      <div>
        <img className={classes.image} src={newsDetail.image} alt={newsDetail.title} />
      </div>
      <div className={classes.desc} dangerouslySetInnerHTML={{ __html: newsDetail.desc }} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  newsDetail: selectNewsDetail,
  user: selectUser,
  isLoading: selectIsLoading,
});

DetailNews.propTypes = {
  newsDetail: PropTypes.object,
  isLoading: PropTypes.bool,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(DetailNews);
