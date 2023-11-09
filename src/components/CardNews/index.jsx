import classes from './style.module.scss';

const CardNews = ({ news }) => {
  return (
    <div className={classes.cardNews}>
      <div>
        <div className={classes.author}>{news.author}</div>
        <div className={classes.title}>{news.title}</div>
      </div>
      <img className={classes.image} src={news.image} alt="image" />
    </div>
  );
};

export default CardNews;
