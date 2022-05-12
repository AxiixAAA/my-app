import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSchoolPagesStyles } from "../style";
import SchoolNavLinkArray from "./SchoolHTMLData.json";

const SchoolHTML = () => {
  const classes = useSchoolPagesStyles();
  const navDataArray = SchoolNavLinkArray;
  
  return (
    <>
      <Box className={classes.container}>
        {navDataArray.HTML.map((el) => (
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

export default SchoolHTML;
