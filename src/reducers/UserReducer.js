import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT_REQUEST
} from '../constants/UserConstant'

const userSignInReducer = (state = { userInfo: {} }, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return { userInfo: {} }
        case SIGN_IN_SUCCESS:
            return { userInfo: action.payload }
        case SIGN_IN_FAIL:
            return { error: action.payload }
        case SIGN_OUT_REQUEST:
            return {}
        default:
            return state
    }
}

export { userSignInReducer }