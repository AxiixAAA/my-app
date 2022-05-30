import { NavLink } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../../../redux/users-selectors";
import { logout } from "../../../../redux/auth-reducer";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  button: {
    "& > button": {
      backgroundColor: theme.palette.background.button,
      boxShadow: theme.palette.boxShadow,
      color: theme.palette.text.paper,
      display: "flex",
      alignItems: "center",
      border: 0,
      fontSize: "14px",
      padding: "10px",
      cursor: 'pointer',
    },
  },
}));

const ExitButton = () => {
  const classes = useStyles();
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  return (
    <Box className={classes.button}>
      {isAuth ? (
        <button onClick={() => dispatch(logout())}>
          Выйти
          <PowerSettingsNewIcon />{" "}
        </button>
      ) : (
        <NavLink to={"/login"}>Войти</NavLink>
      )}
      {/* onClick={props.logout} */}
    </Box>
  );
};

export default ExitButton;
