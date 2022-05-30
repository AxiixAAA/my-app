/* eslint-disable jsx-a11y/alt-text */
import { createField, Input } from "../Common/FormsControls/FormsControls";
import { required } from "../utils/validators/validators";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { InjectedFormProps, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { TGlobalState } from "../../redux/reduxStore";
import { FC } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

type Theme = {
    palette : any
}
const useStyles = makeStyles((theme: Theme) => ({
    SearchText:{
        boxShadow: theme.palette.boxShadowSearch,
        borderRadius: "20px",

        '& > * input': {
            color: theme.palette.text.search,
            backgroundColor: theme.palette.background.paper,
            width: '100%',
            paddingLeft: '15px',
            margin: '1px 0px 0px 0px',
            lineHeight: '220%',
            fontSize: '1em',
            boxSizing: 'border-box',
            border: 'none',
            borderRadius: '20px',
            resize: 'none',
            outline: 'none',
        },
        '& > * button':{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.search,
            border: 'none',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            borderRadius: '20px',
        }
        
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '340px',
    },
    LoginForm:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.header,
        borderRadius: '20px',
        boxShadow: '0px 0px 2px wheat',
        padding: '27px',

        '& button':{
            width: '100%',
            height: '30px',
            paddingBottom: '3px',
            backgroundColor: theme.palette.background.button,
            color: 'white',
            borderRadius: '7px',
            border: 'none',
            cursor: 'pointer',
        },
        
        '& img':{
            width: '100%',
        },
        '& input':{
            width: '270px',
            height: '35px',
            marginBottom: '15px',
            paddingLeft: '10px',
            outline:'none',
        }
    },
    formError:{
        color: 'red',
    }

}));


const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
const classes = useStyles();   
 
  return (<Box className={classes.container}>
      <Box className={classes.LoginForm}>
        <form onSubmit={handleSubmit}>
            <Box>{createField("Email","email",[required], Input)}</Box>
            <Box>{createField("Password","password",[required], Input, {type: "password"})}</Box>
        
            {captchaUrl && <img src={captchaUrl} /> }
            {captchaUrl && createField("Symbols from inage","captcha",[required], Input, {}) }
            {error && <Box className={classes.formError}>{error}</Box>}
            <button>Войти</button>
        </form>
    </Box>
  </Box>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType,LoginFormOwnProps>({ form: "login" })(LoginForm)

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: null
}

export const LoginPage: FC = () => {
    const captchaUrl = useSelector((state:TGlobalState) => state.auth.captchaUrl)
    const isAuth = useSelector((state:TGlobalState) => state.auth.isAuth)
    const dispatch = useDispatch()

  const onSubmit = (formData:LoginFormValuesType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
}

