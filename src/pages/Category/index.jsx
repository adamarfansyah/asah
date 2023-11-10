import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CardsNews from '@components/CardsNews';
import Categories from '@components/Categories';

import { getCategoryAction, getNewsCategoryAction } from './actions';
import { selectCategories, selectCategory, selectIsLoading, selectNewsCategory } from './selectors';
import classes from './style.module.scss';

const Category = ({ newsCategory, categories, category, isLoading }) => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const categoryData = category[0];

  useEffect(() => {
    dispatch(getCategoryAction(categoryName));
    dispatch(getNewsCategoryAction(categoryName));
  }, [categoryName]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={classes.newsCategory}>
      <div className={classes.wrapper}>
        <div className={classes.title}>{categoryData?.category}</div>
        <div className={classes.desc}>{categoryData?.desc}</div>
      </div>
      <div className={classes.body}>
        <CardsNews payload={newsCategory} />
        <Categories payload={categories} isLoading={isLoading} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  newsCategory: selectNewsCategory,
  category: selectCategory,
  categories: selectCategories,
  isLoading: selectIsLoading,
});

Category.propTypes = {
  newsCategory: PropTypes.array,
  categories: PropTypes.array,
  category: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps)(Category);
