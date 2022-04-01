import React, { Component, Suspense } from "react"
import { Redirect, Route, Switch, withRouter } from "react-router-dom"
import "./App.css"
import Navbar from "./commponents/Navbar/Navbar"
import { connect } from "react-redux"
import { initializeApp } from "./redux/app-reducer"
import { compose } from "redux"

import Preloader from "./commponents/Common/Preloader/Preloader"
import HeaderContainer from "./commponents/Header/HeaderContainer"
import { UsersPage } from "./commponents/Users/UsersContainer"
import { LoginPage } from "./commponents/Login/Login"
import { Box } from "@mui/material"

const  DialogsContainer = React.lazy(() => import('./commponents/Dialogs/DialogsContainer'))
const  ProfileContainer = React.lazy(() => import('./commponents/Profile/ProfileContainer'))

class App extends Component {
    // Все необработаные ошибки в помисах
    catcAllUnhandledErrors = (reason, promise) => {
        alert("Some error");
    }

    // инициалтзируем приложение
    componentDidMount() {
        this.props.initializeApp();
        // Side Effect код выходящий за рамки react, подписались на глобальное событие 
        window.addEventListener("unhandledrejection", this.catcAllUnhandledErrors);
    }
    // Если компаниа вдруг начнёт умирать, ном обязательно нужно сделать отписку
    componentWillUnmount(){
        window.removeEventListener("unhandledrejection", this.catcAllUnhandledErrors);
    }

    render(){
        // Показываем Preloader пока наше приложение инициализируется
        if (!this.props.initialized){
        return <Preloader />
        }
        return (
            <Box className="app-wrapper"  sx={{bgcolor: 'background.default', color: 'text.primary'}}>

                <Suspense fallback={<div>Загрузка...</div>}>

                <HeaderContainer />
                <Navbar />
                    <section className="app-wrapper-content">
                        <Switch >
                            <Redirect exact from="/" to="/profile" />
                            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>   
                            <Route path="/dialogs" render={() => <DialogsContainer />}/>
                            <Route path="/users"   render={() => <UsersPage pageTitle={"friends"} />} />
                            <Route path="/login"   render={() => <LoginPage />} />
                            <Route path="*"        render={() =>  <div>404 NOTE FOUND</div>}/>
                        </Switch>
                    </section>
                </Suspense>
            </Box>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
withRouter,
connect(mapStateToProps, {initializeApp}))(App);