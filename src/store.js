import { combineReducers } from "redux"

// actions
const AnimateLogin = (payload) =>{
    return{
        type: 'ANIMATE LOGIN',
        payload
    }
}

// user action get jwt from sessign storage as default
const UserAction = (payload) =>{
    return{
        type: 'GET USER',
        payload
    }
} 

// card actions
const CardsAction = (type,payload) => {
    return{
        type,
        payload
    }
}

// send money fields actions 
const AReceipientWallet = (type,payload) => {
    return {
        type,
        payload
    }
}
const ASaveUser = (type,payload) => {
    return {
        type,
        payload
    }
}
const AAmount = (type,payload) => {
    return {
        type,
        payload
    }
}
const APayWith = (type,payload) => {
    return {
        type,
        payload
    }
}

const ANetwork = (type,payload) => {
    return{
        type,
        payload
    }
}

const ASavedUsers = (payload) => {
    return {
        type: 'GET SAVED USERS',
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

const UsersReducer = (state = {}, action) =>{
    if(action.type === 'GET USER'){
        return state = action.payload
    }

    return state
}

const CardsReducer = (state = [], action) =>{
    if(action.type === 'GET'){
       return state = action.payload 
    }
    return state
}

const RSavedUsers = (state = [], action) =>{
    if(action.type === 'GET SAVED USERS'){
        return state = action.payload
    }
    return state
}

const RReciepientWallet = (state = '', action) => {
    if(action.type === 'RECEIPIENTWALLET'){
        return state = action.payload
    }
    return state
}

const RSaveUser = (state = false, action) => {
    if(action.type === 'SAVEUSER'){
        return state = !state
    }
    return state
}

const RAmount = (state = '', action) => {
    if(action.type === 'AMOUNT'){
        if(parseFloat(action.payload) < 0){
            return state = 0
        }

        if(parseFloat(action.payload) > 2000){
            return state = 2000
        }

        return state = action.payload
    }
    return state
}

const RPayWith = (state = '', action) => {
    if(action.type === 'PAY WITH'){
        return state = action.payload
    }
    return state
}

const RNetwork  = (state = '', action)=>{
    if(action.type === 'SET NETWORK'){
        return state = action.payload
    }
    return state
} 



const allReducers = combineReducers({
    User: UsersReducer,
    animate: AnimateReducer,
    Cards: CardsReducer,
    ReciepientWallet: RReciepientWallet,
    SaveUser: RSaveUser,
    Amount: RAmount,
    PayWith: RPayWith,
    SelectedNetwork: RNetwork,
    SavedUsers: RSavedUsers
})

export {
  allReducers,
  AnimateLogin,
  UserAction,
  CardsAction,
  AAmount,
  ASaveUser,
  AReceipientWallet,
  APayWith,
  ANetwork,
  ASavedUsers
};