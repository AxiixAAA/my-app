import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ThemeSwitch from "./settingsComponent/ThemeSwitch/ThemeSwitch";
import { TimeSwitch } from "./settingsComponent/TimeSwitch/TimeSwitch";
import ExitButton from "./settingsComponent/ExitButton/ExitButton";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/users-selectors";

const useStyles = makeStyles((theme) => ({
  settingsContainer: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    width: "100%",
    height: "500px",
    borderRadius: "20px",
  },
}));

const Setings = (props) => {
  const classes = useStyles();
  const isAuth = useSelector(getIsAuth);

  if (!isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <>
      <Grid container className={classes.settingsContainer}>
        <ThemeSwitch />
        <TimeSwitch />
        <ExitButton />
      </Grid>
    </>
  );
};

export default Setings;
