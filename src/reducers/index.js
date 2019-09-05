import {combineReducers} from 'redux';
import messageReducer from './messageReducer';
const appReducer = combineReducers({
    messageReducer
});

const rootReducer = (state,action) => {
    if(action.type==="LOGOUT"){
        state = undefined
    }

    return appReducer(state,action);
}

export default rootReducer;