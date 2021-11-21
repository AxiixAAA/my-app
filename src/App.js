import React, { Component } from "react";
import HeaderContainer from "commponents/Header/HeaderContainer";
import ProfileContainer from "commponents/Profile/ProfileContainer";
import UsersContainer from "commponents/Users/UsersContainer";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./commponents/Dialogs/DialogsContainer";
import Navbar from "./commponents/Navbar/Navbar";
import LoginPage from "commponents/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "redux/app-reducer";
import Preloader from "commponents/Common/Preloader/Preloader";
import { compose } from "redux";


class App extends Component {
  
  componentDidMount() {
    this.props.initializeApp();
   }

  render(){
    if (!this.props.initialized){
      return <Preloader />
    }
    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />

          <div className="app-wrapper-content">
            <Route
              path="/dialogs"
              render={() => <DialogsContainer />}/>

            <Route
              // Добавляем параметр к profile через :  необходимо для работы с withRouter ? - данный параметр не обязателен
              path="/profile/:userId?"
              // 
              render={() => <ProfileContainer />}
            />

            <Route path="/users" 
                   render={() => <UsersContainer />} />

            <Route path="/login"
                   render={() => <LoginPage />} />
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// export default withRouter(connect(mapStateToProps, {initializApp})(App)); 

export default compose(
withRouter,
connect(mapStateToProps, { initializeApp}))(App);