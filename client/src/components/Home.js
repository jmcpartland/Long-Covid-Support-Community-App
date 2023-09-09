import React, { useContext } from "react";
import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserContext } from "../context/user";
import long_covid_image from "../images/long_covid_image.jpeg"

const Home = () => {
    const { user } = useContext(UserContext)
    
    // function capitalizeFirstLetter(name) {
    //     return name.charAt(0).toUpperCase() + name.slice(1);
    // }

    // const CustomizeName = () => {
    //     if (loggedIn || !user.error) {
    //         return (<div> Welcome {user.first_name}</div>)
    //     } else {
    //         return (<div>Welcome to the long covid support community</div>)
    //     }
    // }

    return(
        <Container>
            <Box sx={{ width: '90%'}}>
            
            <img src={long_covid_image} width="100%" height="100%" alt="long covid" />

                <Typography variant="h3" align="left">
                    {/* { CustomizeName() } */}
                    Welcome {user.first_name}
                </Typography>
                <br/>
                <Typography variant="h6" align="left">
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