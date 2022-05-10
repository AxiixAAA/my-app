import { createField, Input } from "../Common/FormsControls/FormsControls";
import { required } from "../utils/validators/validators";

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { InjectedFormProps, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import style from "./Login.module.css";
import { TGlobalState } from "../../redux/redux-store";
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

