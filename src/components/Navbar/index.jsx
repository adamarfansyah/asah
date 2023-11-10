import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Logout, Add, Article } from '@mui/icons-material';
import { IconButton, ListItemIcon, Tooltip } from '@mui/material';

import config from '@config/index';

import { setLocale, showPopup } from '@containers/App/actions';

import classes from './style.module.scss';

const Navbar = ({ title, locale, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const open = Boolean(menuPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };
  const handleLogout = () => {
    dispatch(showPopup('app_popup_logout_title', 'app_popup_logout_message', 'logout'));
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const openDropdown = Boolean(anchorEl);
  const handleClickDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropDown = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src="/vite.svg" alt="logo" className={classes.logo} />
          <div className={classes.title}>{title}</div>
        </div>
        <div className={classes.toolbar}>
          {user ? (
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClickDropdown}
                size="medium"
                sx={{ ml: 2 }}
                aria-controls={openDropdown ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openDropdown ? 'true' : undefined}
              >
                <Avatar sx={{ width: 40, height: 40 }}>{user?.fullName?.slice(0, 2)}</Avatar>
              </IconButton>
            </Tooltip>
          ) : null}
          <div className={classes.toggle} onClick={handleClick}>
            <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
            <div className={classes.lang}>{locale}</div>
            <ExpandMoreIcon />
          </div>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={openDropdown}
          onClose={handleCloseDropDown}
          onClick={handleCloseDropDown}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {user?.role === config.role.admin ? (
            <MenuItem onClick={() => navigate('/register')}>
              <ListItemIcon>
                <Add fontSize="small" />
              </ListItemIcon>
              Create Employee
            </MenuItem>
          ) : null}
          {user?.role === config.role.employee ? (
            <MenuItem onClick={() => navigate('/news/add')}>
              <ListItemIcon>
                <Article fontSize="small" />
              </ListItemIcon>
              Create News
            </MenuItem>
          ) : null}
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/id.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_id" />
              </div>
            </div>
          </MenuItem>
          <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/en.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_en" />
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    fullName: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Navbar;
