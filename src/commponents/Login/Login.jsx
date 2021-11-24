import { createField, Input } from "commponents/Common/FormsControls/FormsControls";
import { required } from "commponents/utils/validators/validators";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "redux/auth-reducer";
import s from "./../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
    {/* createField Функция с настройками для полей формы взята из  commponents/Common/FormsControls/FormsControls*/}
    {/* createField = (placeholder, name, validators, component, props = {}, text = "") */}
        {createField("Email","email",[required], Input)}
        {createField("Password","password",[required], Input, {type: "password"})}
        {createField(null,"rememberMe",[], Input, {type: "checkbox"}, "rememberMe")}

        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
