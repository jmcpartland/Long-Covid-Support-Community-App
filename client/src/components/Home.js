import React, { useContext } from "react";
import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserContext } from "../context/user";
import long_covid_image from "../images/long_covid_image.jpeg"

const Home = () => {
    const { user, loggedIn } = useContext(UserContext)
    
    const CustomizeName = () => {
        if (loggedIn) {
            return (<div> Welcome {user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)}</div>)
        } else {
            return (<div>Welcome to the long covid support community</div>)
        }
    }

    return(
        <Container>
            <Box sx={{ width: '90%'}}>
            
            <img src={long_covid_image} width="100%" height="100%" alt="long covid" />

                <Typography variant="h3" align="left">
                    { CustomizeName() }
                </Typography>
                <br/>
                <Typography variant="h5" align="left">
                    What we are about
                </Typography>
                <Typography variant="body1" align="left" gutterBottom>
                    The Long Covid Support Community blog is for anyone who is suffering or had suffered from long covid.
                    This is a place where we can share our stories and support each other.
                </Typography>
            </Box>
            <br/>
        </Container>
    )
}

export default Home;