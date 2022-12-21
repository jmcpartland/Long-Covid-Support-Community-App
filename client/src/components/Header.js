import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom"


function Header() {
  const { user, logout, loggedIn} = useContext(UserContext);
  const navigate = useNavigate()

  const title = "Long Covid Support"

  const sections = [
    { title: 'Resources', url: '#' },
    { title: 'Blogs', url: '#' },
    { title: 'Statistics', url: '#' },
  ];


  const handleLogout = () => {
      fetch('/logout', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {
          logout()
          navigate('/')
      })
  }


  const LogInOrOut = () => {
    if (loggedIn) {
      return <Button onClick={handleLogout} variant="outlined" size="small">Logout</Button>

    } else {
      return <LoginModal />
    }
  }


  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'grey.200' }}>

        {/* <LoginModal /> */}
        {LogInOrOut()}

        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <SignupModal />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;