import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from "react-router-dom";
import { Avatar, Button, CssBaseline } from '../../../node_modules/@material-ui/core';
import headerStyle from "../../assets/jss/components/headerStyle";

const useStyles = makeStyles(headerStyle);

function Header({ collapse, onDrawerOpen }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const changeTheme = e => {
    localStorage.setItem("theme", localStorage.getItem("theme") !== "dark" ? "dark" : "light")
    if (window.location.hostname.includes("github"))
      window.location.href = "https://shiburagi.github.io/MinimalMUI"
    else
      window.location.reload();

  }

  const themeButton = localStorage.getItem("theme") !== "dark" ? "Night Mode" : "Light Mode";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem
        className={classes.menuItem}
        onClick={changeTheme}>
        <IconButton color="inherit">

        </IconButton>
        <p>{themeButton}</p>
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
      >
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
      >
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
        onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <Avatar src={require("../../assets/img/user1.jpg")} className={classes.avatar} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: collapse,
        })}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classNames(classes.menuButton, {
              [classes.hide]: collapse,
            })}
            onClick={onDrawerOpen}
            color="inherit"
            aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Minimalist Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button variant="outlined" color={"inherit"} onClick={changeTheme}
              style={{ marginRight: 8 }}>
              {themeButton}
            </Button>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-owns={isMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{
                marginLeft: 4,
              }}
            >
              <Avatar src={require("../../assets/img/user1.jpg")} />

            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </div>
  );
}


Header.propTypes = {
  collapse: PropTypes.bool,
  onDrawerOpen: PropTypes.func,
};

export default withRouter(Header);