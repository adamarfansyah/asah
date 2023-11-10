import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CardsLatest from '@components/CardsLatest';
import CardsNews from '@components/CardsNews';
import Categories from '@components/Categories';
import { selectCategories, selectNews, selectIsLoading } from './selectors';
import classes from './style.module.scss';
import { getCategoriesAction, getNewsAction } from './actions';

const Home = ({ news, categories, isLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([dispatch(getNewsAction()), dispatch(getCategoriesAction())]);
  }, []);

  return (
    <div className={classes.homePage}>
      <div className={classes.wrapper}>
        <div className={classes.title}>ASAH</div>
        <div className={classes.desc}>
          <FormattedMessage id="app_header_home" />
        </div>
      </div>
      <CardsLatest payload={news} isLoading={isLoading} />
      <div className={classes.body}>
        <CardsNews payload={news} isLoading={isLoading} />
        <Categories payload={categories} isLoading={isLoading} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  news: selectNews,
  categories: selectCategories,
  isLoading: selectIsLoading,
});

Home.propTypes = {
  news: PropTypes.array,
  categories: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps)(Home);
