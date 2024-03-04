import React, { useContext } from "react";
import { Box } from "@mui/material";
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserContext } from "../context/user";
import long_covid_image from "../images/long_covid_image.jpeg"

const Home = () => {
    const { user } = useContext(UserContext)
    
    // function capitalizeFirstLetter(name) {
    //     return name.charAt(0).toUpperCase() + name.slice(1);
    // }

    return(
      <Box sx={{ margin: 2 }}>
        <img src={long_covid_image} width="100%" height="100%" alt="" />

          <Typography variant="h3" align="left">
              Welcome {user.first_name}
          </Typography>
          
          <Typography variant="h6" align="left" gutterBottom>
              What we are about
          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
              Lorit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, 
              quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat 
              deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl. 
              Vitae proin sagittis laoreet sit amet cursus sit. Enim sed faucibus turpis in eu mi bibendum neque. 
              Vestibulum lectus mauris ultrices eros. Volutpat lacus laoreet non curabitur gravida arcu. Arcu non odio 
              euismod lacinia at quis. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. 
              Enim neque volutpat ac tincidunt vitae semper quis. Lectus nulla at volutpat diam ut venenatis tellus. 
              Neque aliquam vestibulum morbi blandit cursus risus at. Nisl condimentum id venenatis a 
              condimentum vitae sapien pellentesque habitant. Odio facilisis mauris sit amet massa. Enim neque volutpat ac tincidunt.
          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
              Euismod quis viverra nibh cras pulvinar mattis. Pellentesque sit amet porttitor eget. A scelerisque purus semper eget duis at. 
              Nisi scelerisque eu ultrices vitae auctor eu augue ut. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. 
              Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Facilisis magna etiam tempor orci. 
              A scelerisque purus semper eget. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. 
              Tincidunt eget nullam non nisi est.
          </Typography>
      </Box>
    )
}

export default Home;