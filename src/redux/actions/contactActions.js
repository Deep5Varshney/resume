
import * as contactActions from './actions'

export const setContact = (contact) => {
    return {
        type:contactActions.SET_CONTACT,
        pay : contact
    }
}

export const updateContact = (contact) => {
    return {
        type:contactActions.UPDATE_CONTACT,
        payload:contact
    }
}
