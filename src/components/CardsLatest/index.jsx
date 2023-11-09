import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CardLatest from '@components/CardLatest';
import classes from './style.module.scss';

const CardsLatest = ({ payload }) => {
  const cardLatestList = payload?.map((news) => <CardLatest news={news} />);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <FormattedMessage id="app_new_news" />
      </div>
      <div className={classes.cardsLatest}>{cardLatestList}</div>
    </div>
  );
};

CardsLatest.propTypes = {
  payload: PropTypes.array,
};

export default CardsLatest;
