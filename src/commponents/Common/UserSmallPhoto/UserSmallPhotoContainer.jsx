import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfile} from "../../../redux/profile-reducer";
import UserSmallPhoto from "./UserSmallPhoto";


class UserSmallPhotoContainer extends React.Component {

  render(){
     return <UserSmallPhoto {...this.props} profile={this.props.profile}/> 
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(connect(mapStateToProps,{getUserProfile}))(UserSmallPhotoContainer);