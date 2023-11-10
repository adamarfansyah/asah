import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectIsLoading, selectNewsDetail } from './selectors';
import { getNewsDetailAction } from './actions';

const DetailNews = ({ newsDetail, isLoading }) => {
  const { newsId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsDetailAction(newsId));
  }, [dispatch, newsId]);

  if (isLoading) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>{newsDetail.title}</h1>
      <h1>{newsDetail.desc}</h1>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  newsDetail: selectNewsDetail,
  isLoading: selectIsLoading,
});

DetailNews.propTypes = {
  newsDetail: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps)(DetailNews);
