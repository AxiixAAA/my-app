import * as React from 'react';
import { Form, Formik } from 'formik';
import { GreenSwitch } from './GreenSwitch';
import Time from './Time';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  sss:{
    color: theme.palette.text.primary,
    fontSize: '5em',
    fontWeight: 'lighter',
    fontFamily: 'Open Sans',
    position: 'absolute',
    top: '85%', left: '3%',
    userSelect: 'none',

  }
 
  }),
);


export function TimeSwitch() {


const dispatch = useDispatch()

const isTime = useSelector(state => state.time.isTime)

 
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const newLocal = React.useCallback;
const showTime = newLocal(
    () => dispatch({type:"UPDATE_TIME", payload: !isTime}),
);

return <>

    <Formik
        initialValues={{
          sell: "N"
        }}
        onSubmit={async values => {
          await sleep(1000);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          isSubmitting,
          values,
          setFieldValue
        }) => (
          <Form>
            <GreenSwitch {...label} defaultChecked 
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
}


export const Clock = () =>{
const classes = useStyles(); 
const isTime = useSelector(state => state.time.isTime)

    return <>
    {isTime
        ? <Box className={classes.sss} ><Time /></Box>
        : null
    }
    </>
}
