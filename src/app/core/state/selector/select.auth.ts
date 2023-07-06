import { createSelector } from "@ngrx/store";
import { state } from "@angular/animations";
import { AppState } from "../app.state";
import { Auth } from "../../models/auth";

export const selectFeature=(state:AppState)=> state.authUser;

export const selectListUser = createSelector(
    selectFeature,
    (state: Auth)=>state.user
)

export const selectToken = createSelector(
    selectFeature,
    (state:Auth)=> state.accessToken
)