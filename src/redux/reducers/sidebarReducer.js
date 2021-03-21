import { CHANGE_SIDEBAR_VISIBILITY } from '../actionTypes/sidebarActionTypes'

const initialState = {
    isOpen: false
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SIDEBAR_VISIBILITY: {
            return {
                ...state,
                isOpen: !state.isOpen
            }
        }

        default: {
            return state;
        }
    }
}

export default sidebarReducer;