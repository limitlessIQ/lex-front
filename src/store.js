import { combineReducers } from "redux"

// actions
const AnimateLogin = (payload) =>{
    return{
        type: 'ANIMATE LOGIN',
        payload
    }
}

// reducers

const AnimateReducer = (state = false, action) => {
    if(action.type === 'ANIMATE LOGIN'){
    return state = true
    }

    return state
}


const allReducers = combineReducers({
    animate: AnimateReducer

})

export {allReducers, AnimateLogin}