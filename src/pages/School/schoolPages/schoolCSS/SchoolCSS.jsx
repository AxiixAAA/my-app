import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useSchoolPagesStyles } from "../style";
import CSSArray from "./SchoolCSSData.json";

const SchoolCSS = () => {
  const classes = useSchoolPagesStyles();
  const navDataArray = CSSArray;
  
  return (
    <>
      <Box className={classes.container}>
        {navDataArray.CSS.map((el) => (
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

export default SchoolCSS;