
import initialState from '../reducer/intialState.json'
import * as contactActions from '../actions/actions'

const contactReducer = (state=initialState.contacts,action) => {
    switch(action.type){
        case contactActions.SET_CONTACT : 
            return {...state, ...action.payload};
        case contactActions.UPDATE_CONTACT : 
            return {...state,...action.payload};
        default : 
            return state 
    }
}



export default contactReducer;
