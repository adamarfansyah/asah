import PropTypes from 'prop-types';
import { useState } from 'react';
import filter from 'lodash/filter';
import { FormattedMessage } from 'react-intl';

import CardNews from '@components/CardNews';
import classes from './style.module.scss';

const CardsNews = ({ payload }) => {
  const [value, setValue] = useState('');
  const filteredCardList = filter(payload, (card) => card.title.includes(value.toLowerCase()));
  const cardList = filteredCardList?.reverse().map((card) => <CardNews key={card.id} news={card} />);

  return (
    <div className={classes.cardsNews}>
      <input
        className={classes.input}
        placeholder="Search News"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {filteredCardList.length === 0 ? (
        <div className={classes.notFound}>
          <FormattedMessage id="app_search_not_found" />
        </div>
      ) : (
        <div>{cardList}</div>
      )}
    </div>
  );
};

CardsNews.propTypes = {
  payload: PropTypes.array,
};

export default CardsNews;
