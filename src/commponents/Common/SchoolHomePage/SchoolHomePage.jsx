import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

export const useStyles = makeStyles((theme) => ({
    container:{
        position: 'relativ',
        top: '5%',
        left: '5%',

        width: '30px',
        height: '30px',
        
        cursor: 'pointer',
        
    }
}));

const SchoolHomePage = () => {
  const classes = useStyles();
  return <>
    <Box className={classes.container}>
        <HomeIcon />
    </Box>
  </>;
};

export default SchoolHomePage;
