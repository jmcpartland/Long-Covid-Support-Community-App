import React, { useContext } from 'react';
import { Stack, Button, AppBar, Toolbar } from '@mui/material';
import Link from '@mui/material/Link';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import AccountMenu from './AccountMenu';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import logoText from '../images/logoText.png';

function Header() {
  const {logout, loggedIn} = useContext(UserContext);
  const navigate = useNavigate()

  const sections = [
    { title: 'Home', url: '/' },
    { title: 'My Posts', url:'/posts'},
    { title: 'All Posts', url: '/all-posts' },
    { title: 'Resources', url: '/resources' },
  ];

  // const handleLogout = () => {
  //     fetch('/logout', {
  //         method: 'DELETE',
  //         headers: { 'Content-Type': 'application/json' }
  //     })
  //     .then(() => {
  //         logout()
  //         navigate('/')
  //     })
  // }

  const LogInOrOut = () => {
    if (!loggedIn) {
    //   return <Button variant='contained' size="small" onClick={handleLogout}>Logout</Button>
    // } else {
      return <LoginModal />
    }
  }

  const SignupOrAccount = () => {
    if (loggedIn) {
      return (
        <>
          <Button variant='outlined' size="small" href="/post-form"
            sx={{ 
              border: 1,
              borderRadius: '20px',
            }}
          >
            Write
          </Button> 
          <AccountMenu />
        </>
      )
    } else {
      return <SignupModal />
    }
  }


  const showSections = () => {
    if (loggedIn) {
      return (
        <Toolbar
          variant="dense"
          sx={{
              minHeight: '30px',
              justifyContent: 'space-between', 
              bgcolor: 'primary.light',
              color: 'primary.main'
            }}
          >
            {sections.map((section) => (
              <Link
                color="inherit"
                underline='none'
                key={section.title}
                href={section.url}
                sx={{ fontSize: 15 }}
                >
                  {section.title}
              </Link>
            ))}
        </Toolbar>
        )
      }
    }
    
    return (
      <AppBar position="static">
        
        <Toolbar sx={{ flex: 1, justifyContent: 'space-between', bgcolor: '#ffffff' }}>
          <img src={logoText} height="75" alt="logo" />

          <Stack direction="row" alignItems={'center'}>
            {LogInOrOut()} 
            {SignupOrAccount()}
          </Stack>
        </Toolbar>
          {showSections()}
      </AppBar>
  );
}

export default Header;