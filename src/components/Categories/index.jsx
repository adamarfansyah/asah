import classes from './style.module.scss';

const Categories = ({ payload }) => {
  const categoryList = payload.map((item) => console.log(item));
  return (
    <div className={classes.categories}>
      <h1>test</h1>
      <h1>{categoryList}</h1>
    </div>
  );
};

export default Categories;
