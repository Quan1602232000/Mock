import {
    SIGN_IN_REQUEST,
    SIGN_OUT_REQUEST
} from '../constants/UserConstant'

const SignInApp = (value) => {
    return {
        type: SIGN_IN_REQUEST,
        value: value
    }
}

const SignOutApp = () => {
    return {
        type: SIGN_OUT_REQUEST
    }
}

export {
    SignInApp,
    SignOutApp
}