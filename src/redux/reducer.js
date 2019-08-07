import { combineReducers } from 'redux';

const connected = (state="God I hope so", action) =>{
    switch(action.type){
        default: 
            return state
    }
}

const reducers = {
    connected: connected
}

export default combineReducers(reducers)