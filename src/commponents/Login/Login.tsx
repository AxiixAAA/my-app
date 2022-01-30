import { createField, Input } from "../Common/FormsControls/FormsControls";
import { required } from "../utils/validators/validators";

import { connect } from "react-redux";
import { Redirect } from "react-router";
import { InjectedFormProps, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import style from "./Login.module.css";
import { AppStateType } from "../../redux/redux-store";
import { FC } from "react";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
 
  return (<div className={style.container}>
      <div className={style.LoginForm}>
        <form onSubmit={handleSubmit}>
        {/* createField Функция с настройками для полей формы взята из  commponents/Common/FormsControls/FormsControls*/}
        {/* createField = (placeholder, name, validators, component, props = {}, text = "") */}
        <div className={style.LoginFormEmail}>{createField("Email","email",[required], Input)}</div>
        <div className={style.LoginFormPassword}>{createField("Password","password",[required], Input, {type: "password"})}</div>
        {/* Капча */}
        {captchaUrl && <img src={captchaUrl} /> }
        {captchaUrl && createField("Symbols from inage","captcha",[required], Input, {}) }
        <div className={style.LoginFormFooter}>
            <div>
                <button>Войти</button>
            </div>    
            <div className={style.LoginFormCheckbox}>
                 {/* {createField(null,"rememberMe",[], Input, {type: "checkbox"}, "Запомнить?")} */}
            </div>        
        </div>
        </form>
    </div>
        {error && <div className={style.formError}>{error}</div>}
  </div>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType,LoginFormOwnProps>({ form: "login" })(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: Boolean
}
type MapDispatchPropsType = {
    login: (email:string, password:string, rememberMe:boolean, captcha:null) => void
}
type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: null
}
const Login: FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData:LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </>
  );
};

const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
