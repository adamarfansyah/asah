import classes from './style.module.scss';

const CardLatest = ({ news }) => {
  return (
    <div className={classes.cardLatest}>
      <div>
        <div className={classes.author}>{news.author}</div>
        <div className={classes.title}>{news.title}</div>
        <div className={classes.date}>{news.date}</div>
      </div>
    </div>
  );
};

export default CardLatest;
