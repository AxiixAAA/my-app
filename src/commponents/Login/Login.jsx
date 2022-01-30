import { createField, Input } from "../../commponents/Common/FormsControls/FormsControls";
import { required } from "../../commponents/utils/validators/validators";

import { connect } from "react-redux";
import { Redirect } from "react-router";
import { reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import style from "./Login.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
 
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


const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
    // debugger
  const onSubmit = (formData) => {
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

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
