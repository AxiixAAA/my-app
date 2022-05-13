import { makeStyles } from "@mui/styles";

export const useSchoolPagesStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: 'space-between',
  },
  containerLesson: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: "215px",
    height: "85px",
    padding: '10px',
    marginBottom: '15px',
    border: '1px dashed red',
    cursor: 'pointer',

    '&:hover':{
        backgroundColor: theme.palette.background.backgroundHover,
    },
  },
  
  containerLessonID:{
    color: '#828282',
    fontSize: '23px',
  },
  containerLessonTitle:{
    color: theme.palette.text.primary,
    fontSize: '14px',

  },

}));
