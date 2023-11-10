import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';
import { selectUser } from '@containers/Client/selectors';

import Navbar from '@components/Navbar';

const MainLayout = ({ children, locale, theme, user }) => (
  <div>
    <Navbar title="ASAH" locale={locale} theme={theme} user={user} />
    {children}
  </div>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
  user: selectUser,
});

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number,
    fullName: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(MainLayout);
