import { Form, Formik } from "formik";
import { GreenSwitch } from "./GreenSwitch";
import Time from "./Time";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  sss: {
    color: theme.palette.text.primary,
    fontWeight: "lighter",
    fontFamily: "Open Sans",
    position: "fixed",
    top: "80%",
    left: "3%",
    userSelect: "none",
    fontSize: "5em",

    [theme.breakpoints.between("xs","sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.between("sm","md")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.between("md","lg")]: {
      fontSize: "4em",
    },
    [theme.breakpoints.between("lg","xl")]: {
      fontSize: "5em",
    },
  },
}));

export function TimeSwitch() {
  const dispatch = useDispatch();

  const isTime = useSelector((state) => state.time.isTime);

  
  useEffect(() => {
    const localStorageRef = localStorage.getItem("Time")
    dispatch({ type: "UPDATE_TIME", payload: JSON.parse(localStorageRef) });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("Time", JSON.stringify(isTime));
  }, [isTime]);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const newLocal = useCallback;
  const showTime = newLocal(() =>
    dispatch({ type: "UPDATE_TIME", payload: !isTime })
  );

  return (
    <>
      <Formik
        initialValues={{
          sell: "N",
        }}
        onSubmit={async (values) => {
          await sleep(1000);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <GreenSwitch
              {...label}
              defaultChecked
              onClick={showTime}
              name="sell"
              value="Y"
              checked={values.sell === "Y"}
              onChange={(event, checked) => {
                setFieldValue("sell", checked ? "Y" : "N");
              }}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export const Clock = () => {
  const classes = useStyles();
  const isTime = useSelector((state) => state.time.isTime);

  return (
    <>
      {isTime ? (
        <Box className={classes.sss}>
          <Time />
        </Box>
      ) : null}
    </>
  );
};
