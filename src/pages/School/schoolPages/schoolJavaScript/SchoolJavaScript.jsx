// import React from 'react'
// import { useSchoolPagesStyles } from '../style';

// const SchoolJavaScript = () => {
// const classes = useSchoolPagesStyles();

//   return (
//     <div>SchoolJavaScript</div>
//   )
// }

// export default SchoolJavaScript

import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSchoolPagesStyles } from "../style";
import JavaScriptArray from "./SchoolJavaScriptData.json";

const SchoolJavaScript = () => {
  const classes = useSchoolPagesStyles();
  const navDataArray = JavaScriptArray;
  
  return (
    <>
      <Box className={classes.container}>
        {navDataArray.JavaScript.map((el) => (
          <Box key={el.id}>
            <Link to={el.href}>
              <Box className={classes.containerLesson}>
                <Box className={classes.containerLessonID}>{el.id}</Box>
                <Box className={classes.containerLessonTitle}>{el.title}</Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SchoolJavaScript;