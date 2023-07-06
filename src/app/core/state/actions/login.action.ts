import { createAction, props } from '@ngrx/store'
import { User } from '../../models/users';

export const initialUser = createAction(
    '[Auth] set logged user',
    props<User>()
)
