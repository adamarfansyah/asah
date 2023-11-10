import CardNews from '@components/CardNews';
import classes from './style.module.scss';

const CardsNews = ({ payload }) => {
  const cardList = payload?.map((card) => <CardNews news={card} />);
  return <div className={classes.cardsNews}>{cardList}</div>;
};

export default CardsNews;
