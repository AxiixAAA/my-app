import React, { ChangeEvent } from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus:string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

  // Локальный стейт
  state = {
    //  Для выделения статуса, нажали на статус стало true, убрали фокус со статуса стало false
    editMode: false,
    // Засетался в стейт
    status: this.props.status
  };
  // функция которая вызовится при нажатии
  activateEditMode = () => {
    // setState выполняется ассинхронно, то есть, после выполнения кода
    this.setState({
      editMode: true
    });
  }
  // Деактивизация функции
  deactivateEditMode = () =>{
    this.setState({
      editMode: false
    });
    
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) =>{
     this.setState({
       status: e.currentTarget.value
     });
  }

  componentDidUpdate (prevProps:PropsType, prevState:StateType){
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    console.log("render")

    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status || "-----"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            {/* autoFocus (когда  editMode: true, autoFocus сам вставит курсор в input) */}
            {/* onBlur возникает при потере элемента фокуса */}
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode} value={this.props.status} />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
