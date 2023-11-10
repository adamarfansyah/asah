import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';

const CardLatest = ({ news }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.cardLatest} onClick={() => navigate(`/detail/${news.id}`)}>
      <div>
        <div className={classes.author}>{news.author}</div>
        <div className={classes.title}>{news.title}</div>
        <div className={classes.date}>{news.date}</div>
      </div>
    </div>
  );
};

CardLatest.propTypes = {
  news: PropTypes.object,
};

export default CardLatest;
