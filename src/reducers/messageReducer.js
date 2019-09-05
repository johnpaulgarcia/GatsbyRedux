let defaultState = {
    message: []
}

module.exports = (state=defaultState,action) => {
    switch(action.type){
        case "MESSAGE": {
            return {
                ...state,
                message: [...state.message,action.message]
            }
        }
        default: 
            return state;
    }
}