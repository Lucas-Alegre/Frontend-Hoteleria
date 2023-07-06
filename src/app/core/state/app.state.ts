import { ActionReducerMap } from "@ngrx/store";
import { Auth } from "../models/auth";
import { authReducer } from "./reducers/reducer";

export interface AppState{
    authUser:Auth
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    authUser: authReducer
}