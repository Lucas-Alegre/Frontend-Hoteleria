import { createReducer, on } from '@ngrx/store'
import { Auth } from '../../models/auth'
import { initialUser } from '../actions/login.action'


export const initialState: Auth = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    accessToken: "",
    error: ""
}

export const authReducer = createReducer(
    initialState,
    on(initialUser, (state, payload) => ({
        ...state,
        user: {
            first_name: payload.first_name,
            last_name: payload.last_name,
            email: payload.email,
            password: payload.password,
            roleId: payload.roleId
        },
        isAuthenticated:true,
        accessToken:"Soytokenxdxdxdxd"
    }))
)