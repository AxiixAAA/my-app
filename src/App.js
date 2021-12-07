import React, { Component, Suspense } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./commponents/Navbar/Navbar";
import { connect } from "react-redux";
import { initializeApp } from "redux/app-reducer";
import { compose } from "redux";

import Preloader from "commponents/Common/Preloader/Preloader";
import HeaderContainer from "commponents/Header/HeaderContainer";

import Game1 from "commponents/Games/Game1/Game1.jsx";

const  DialogsContainer = React.lazy(() => import('./commponents/Dialogs/DialogsContainer'));
const  ProfileContainer = React.lazy(() => import('commponents/Profile/ProfileContainer'));
const  UsersContainer   = React.lazy(() => import('commponents/Users/UsersContainer'));
const  LoginPage        = React.lazy(() => import('commponents/Login/Login'));
const  Games            = React.lazy(() => import('commponents/Games/Games'));

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

                <Suspense fallback={<div>Загрузка...</div>}>

                <HeaderContainer />
                <Navbar />
                    <section className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>   
                        <Route path="/dialogs" render={() => <DialogsContainer />}/>
                        <Route path="/users"   render={() => <UsersContainer />} />
                        <Route path="/login"   render={() => <LoginPage />} />
                        <Route path="/games"   render={() => <Games />} />
                        <Route path="/game1"   render={() => <Game1 />} />
                    </section>
                </Suspense>
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