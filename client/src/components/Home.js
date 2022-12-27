import React, { useContext } from "react";
import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserContext } from "../context/user";

const Home = () => {
    const { user, loggedIn } = useContext(UserContext)
    
    // function capitalizeFirstLetter(name) {
    //     return name.charAt(0).toUpperCase() + name.slice(1);
    // }

    const Customize = () => {
        if (loggedIn || !user.error) {
            return (<div> Welcome {user.first_name}</div>)
        } else {
            return (<div>Welcome to the long covid support community</div>)
        }
    }

    return(
        <Container>
            <Box sx={{ width: '90%'}}>
                <Typography variant="h5" align="left">
                    { Customize() }
                </Typography>
                <Typography variant="body1" align="left" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, 
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? 
                    Eum quasi quidem quibusdam.
                </Typography>
            </Box>
        </Container>
    )
}

export default Home;