import { makeStyles } from "@mui/styles";

export const useSchoolStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "92vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    borderRadius: '10px',
    '& .MuiTab-root':{
        color: theme.palette.text.primary, 
    }
  },

}));
