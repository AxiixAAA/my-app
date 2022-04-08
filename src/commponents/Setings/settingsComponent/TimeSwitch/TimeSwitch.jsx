import * as React from 'react';
import { Form, Formik } from 'formik';
import { GreenSwitch } from './GreenSwitch';
import Time from './Time';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  sss:{
    color: theme.palette.text.primary,
    fontSize: '8em',
    fontWeight: '100',
    position: 'absolute',
    top: '80%', left: '3%',
    userSelect: 'none',

  }
 
  }),
);


export function TimeSwitch() {
const classes = useStyles();   
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const [clock, setClock] = React.useState('true')
const showTime = React.useCallback(
    () => setClock(!clock),
);

return <>
  {clock
    ? <Box className={classes.sss} ><Time /></Box>
    : null
  }
  
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

