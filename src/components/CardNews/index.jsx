import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import formattedDate from '@utils/formattedDate';

import classes from './style.module.scss';

const CardNews = ({ news }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.cardNews} onClick={() => navigate(`/detail/${news.id}`)}>
      <div className={classes.wrapper}>
        <div>
          <div className={classes.author}>{news.author}</div>
          <div className={classes.title}>{news.title}</div>
        </div>
        <div className={classes.date}>{formattedDate(news.created_at)}</div>
      </div>
      <img className={classes.image} aria-hidden src={news.image} alt="image" />
    </div>
  );
};

CardNews.propTypes = {
  news: PropTypes.object,
};

export default CardNews;
