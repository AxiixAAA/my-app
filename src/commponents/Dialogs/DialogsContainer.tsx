// import { actions } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { TGlobalState } from "../../redux/reduxStore";

let mapStateToProps = (state: TGlobalState) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps),
  // Защита~Редирект, от незарегистрированного пользователя
  withAuthRedirect
)(Dialogs);
