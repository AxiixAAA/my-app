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

// import PageHTML1 from "./pages/School/schoolPages/pages/pageHTML/PageHTML1"
// import PageHTML2 from "./pages/School/schoolPages/pages/pageHTML/PageHTML2"
// import PageHTML3 from "./pages/School/schoolPages/pages/pageHTML/PageHTML3"

// import PageHTML1 from "./pages/School/schoolPages/pages/pageHTML/pageHTML1"


const  DialogsContainer = React.lazy(() => import('./commponents/Dialogs/DialogsContainer'))
const  ProfileContainer = React.lazy(() => import('./commponents/Profile/ProfileContainer'))
const  ChatPage = React.lazy(() => import('./pages/chat/ChatPage'))
const  NewsContainer = React.lazy(() => import('./pages/News/NewsContainer'))
const  SchoolContainer = React.lazy(() => import('./pages/School/SchoolContainer'))
const  PageHTML1 = React.lazy(() => import('./pages/School/schoolPages/pages/pageHTML/PageHTML1'))
const  PageHTML2 = React.lazy(() => import('./pages/School/schoolPages/pages/pageHTML/PageHTML2'))
const  PageHTML3 = React.lazy(() => import('./pages/School/schoolPages/pages/pageHTML/PageHTML3'))



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
                                        <Route path="/school" render={() => <SchoolContainer />}/>
                                        
                                        <Route path="/html/1" render={() => <PageHTML1 />}/>
                                        <Route path="/html/2" render={() => <PageHTML2 />}/>
                                        <Route path="/html/3" render={() => <PageHTML3 />}/>
{/*                                         
                                        <Route path="/school/CSS/1" render={() => <SchoolContainer />}/>
                                        <Route path="/school/CSS/2" render={() => <SchoolContainer />}/>
                                        <Route path="/school/CSS/3" render={() => <SchoolContainer />}/>
                                        
                                        <Route path="/school/JS/1" render={() => <SchoolContainer />}/>
                                        <Route path="/school/JS/2" render={() => <SchoolContainer />}/>
                                        <Route path="/school/JS/3" render={() => <SchoolContainer />}/> */}


                                        <Route path="/dialogs" render={() => <DialogsContainer />}/>
                                        <Route path="/users"   render={() => <UsersPage pageTitle={"friends"} />} />
                                        <Route path="/login"   render={() => <LoginPage />} />
                                        <Route path="/chat"    render={() => <ChatPage />} />
                                        <Route path="/news"    render={() => <NewsContainer />} />
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