import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../../redux/users-selectors";
import { Field, Form, Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: theme.palette.background.header,
    boxShadow: theme.palette.boxShadow,
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "15px",
    fontSize: "1.2em",

    "& > a": {
      color: "#B3B3B3",
      textDecoration: "none",
      fontFamily: "Arial",
    },
    "& > a:hover": {
      display: "block",
      backgroundColor: theme.palette.background.button,
      color: "white",
      borderRadius: "10px",
    },
   

    // >>>>>
    "& * select": {
        color: "#B3B3B3",
        border: 'none',
        borderRadius: "15px",
        width: '165px',
    },

    "& * option": {
        border: 'none',
        cursor: 'pointer',
        backgroundColor: theme.palette.background.header,
        padding: '15px',
        fontSize: "1.2em",
        color: "#B3B3B3",
    },
    
    "& * option:hover": {
        backgroundColor: theme.palette.background.button,
        color: "white",
    },
    "& > button": {
        border: 'none',
        backgroundColor: theme.palette.background.header,
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",

    "& > svg": {
      marginRight: "12px",
    },
  },
}));

const UserNavbar = (props) => {
  const classes = useStyles();
  const filter = useSelector(getUsersFilter);

  // Валидация
  const usersSearchFormValidate = (values) => {
    const errors = {};
    return errors;
  };

  // Настройка кнопки
  const submit = (values, setSubmitting) => {
    props.onFilterChenged(values);
    setSubmitting(false);
  };
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ term: filter.term, friend: filter.friend }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box className={classes.nav}>
              {/* <button type="submit">
                <NavLink to="/users?term=&friend=true">
                  <Box className={classes.item}>Мои друзья</Box>
                </NavLink>
              </button>

              <NavLink to="/users">
                <Box className={classes.item}>Поиск друзей</Box>
              </NavLink> */}
              <button>
                <Field name="friend" as="select" size="1" multiple={true}>
                  <option value="true">Мои друзья</option>
                </Field>
              </button>
              <button>
                <Field name="friend" as="select" size="1" multiple={true}>
                  <option value="false">Поиск друзей</option>
                </Field>
              </button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UserNavbar;
