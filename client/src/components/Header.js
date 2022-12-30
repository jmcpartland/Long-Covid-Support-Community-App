import React, { useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import AccountMenu from './AccountMenu';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom"

function Header() {
  const {logout, loggedIn} = useContext(UserContext);
  const navigate = useNavigate()
  const title = "Long Covid Support Community"

  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Blogs', url: '/posts' },
    // { title: 'Resources', url: '#' },
    // { title: 'Statistics', url: '#' },
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

  const SignupOrAccount = () => {
    if (loggedIn) {
      return <AccountMenu />
    } else {
      return <SignupModal />
    }
  }

  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#ffffff',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#4682B4' }}>

        {LogInOrOut()}

        <Typography
          component="h2"
          variant="h4"
          color="#ffffff"
          align="center"
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
         
         {SignupOrAccount()}

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
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Header;