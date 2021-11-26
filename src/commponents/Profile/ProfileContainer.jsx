import { withAuthRedirect } from "hoc/withAuthRedirect";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getStatus, getUserProfile, savePhoto, updateStatus } from "redux/profile-reducer";
import Profile from "./Profile";


class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId); // Thunk ~ санка *.*
        this.props.getStatus(userId);
    }

    componentDidMount(){
        this.refreshProfile(); 
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // Если Id изи текущих props != Id изи прошлых props меняем на  prevProps
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();   
        }
    }


  render(){

    return(
      <Profile {...this.props} profile={this.props.profile}
       status={this.props.status}  updateStatus={this.props.updateStatus}
       isOwner={!this.props.match.params.userId}
       savePhoto={this.props.savePhoto}
       />    
    )
  }
}

// mapStateToProps - отслеживает измениния в state .profilePage.profile если они произошли, то указанные переменные перерисуются 
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



