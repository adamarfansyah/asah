import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const Categories = ({ payload }) => {
  const categoryList = payload.map((item) => (
    <div key={item.id} className={classes.category}>
      {item.category}
    </div>
  ));

  return (
    <div className={classes.categories}>
      <div className={classes.title}>
        <FormattedMessage id="app_head_categories" />
      </div>
      <div className={classes.categoriesList}>{categoryList}</div>
    </div>
  );
};

Categories.propTypes = {
  payload: PropTypes.array,
};

export default Categories;
