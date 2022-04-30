

const defaultState ={
    isTime: true
}

const TimeReducer = (state = defaultState, action) => {
    switch (action.type){
        case "UPDATE_TIME":
            return {
                ...state, isTime: action.payload
            }
        default:
            return state
    }
}



export default TimeReducer