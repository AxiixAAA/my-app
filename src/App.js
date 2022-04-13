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
import { Grid } from "@mui/material"
import Setings from "./commponents/Setings/Setings"
import { Clock } from "./commponents/Setings/settingsComponent/TimeSwitch/TimeSwitch"

const  DialogsContainer = React.lazy(() => import('./commponents/Dialogs/DialogsContainer'))
const  ProfileContainer = React.lazy(() => import('./commponents/Profile/ProfileContainer'))
const  ChatPage = React.lazy(() => import('./pages/chat/ChatPage'))

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
            <Grid container className="app-wrapper" >
                <Grid container xs={10} style={{maxWidth: '1000px'}} >
                    <Grid item xs={12}>
                        <HeaderContainer />
                    </Grid>
                    <Grid item xs={12} container  spacing={2}>
                        <Grid item xs={2.5}>
                            <Navbar />
  <Clock />

                        </Grid>
                        <Grid item xs={9.5}>
                            <Suspense fallback={<div>Загрузка...</div>}> 
                                <section className="app-wrapper-content">
                                    <Switch >
                                        <Redirect exact from="/" to="/profile" />
                                        <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>   
                                        <Route path="/dialogs" render={() => <DialogsContainer />}/>
                                        <Route path="/users"   render={() => <UsersPage pageTitle={"friends"} />} />
                                        <Route path="/login"   render={() => <LoginPage />} />
                                        <Route path="/chat"    render={() => <ChatPage />} />
                                        <Route path="/settings"render={() => <Setings />} />
                                        <Route path="*"        render={() =>  <div>404 NOTE FOUND</div>}/>
                                    </Switch>
                                </section>
                            </Suspense>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
withRouter,
connect(mapStateToProps, {initializeApp}))(App);