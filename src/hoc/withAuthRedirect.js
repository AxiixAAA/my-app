import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

// 2я контейнерная компонента
// конект к стору и забираем значение isAuth
let mapStateToPropsForRedirect = (state) => ({ isAuth: state.auth.isAuth });

// 1я контейнерная компонента
// Функция, которая принимает на входе component --> типа пропс
export const withAuthRedirect = (Component) => {
    // создаём класс 
    class RedirectComponent extends React.Component {
        render() {
            // задаём логику редиректа
            if (!this.props.isAuth) return <Redirect to="/login"/> 
            // перерисовываем целевую компоненту которую нам на фходе подадут 
            return <Component {...this.props} />
        }
    }

    
    let  ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}