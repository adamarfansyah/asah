import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CardsLatest from '@components/CardsLatest';
import CardsNews from '@components/CardsNews';
import Categories from '@components/Categories';
import classes from './style.module.scss';

const DUMMY = [
  {
    id: 1,
    title: 'test',
    desc: 'HEHHEHEHEHEHEHHEHEHEHHEHEHEHHEHEHE',
    date: '22 November 2023',
    author: 'Adam Sake A',
    image:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'test',
    desc: 'HEHHEHEHEHEHEHHEHEHEHHEHEHEHHEHEHE',
    date: '22 November 2023',
    author: 'Adam Sake A',
    image:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'test',
    desc: 'HEHHEHEHEHEHEHHEHEHEHHEHEHEHHEHEHE',
    date: '22 November 2023',
    author: 'Adam Sake A',
    image:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'test',
    desc: 'HEHHEHEHEHEHEHHEHEHEHHEHEHEHHEHEHE',
    date: '22 November 2023',
    author: 'Adam Sake A',
    image:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'test',
    desc: 'HEHHEHEHEHEHEHHEHEHEHHEHEHEHHEHEHE',
    date: '22 November 2023',
    author: 'Adam Sake A',
    image:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'test',
    desc: 'HEHHEHEHEHEHEHHEHEHEHHEHEHEHHEHEHE',
    date: '22 November 2023',
    author: 'Adam Sake A',
    image:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const CATEGORIES = [
  { id: 1, category: 'Sports' },
  { id: 2, category: 'E-Sports' },
  { id: 3, category: 'Politics' },
  { id: 4, category: 'Software Developments' },
];

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.homePage}>
      <div className={classes.wrapper}>
        <div className={classes.title}>ASAH</div>
        <div className={classes.desc}>
          <FormattedMessage id="app_header_home" />
        </div>
      </div>
      <CardsLatest payload={DUMMY} />
      <div className={classes.body}>
        <CardsNews payload={DUMMY} />
        <Categories payload={CATEGORIES} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(Home);
