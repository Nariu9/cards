import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {loginReducer} from '../../n2-features/f1-auth/a1-login/login-reducer';
import {registerReducer} from '../../n2-features/f1-auth/a2-register/register-reducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>

// type AppActionsType = TodolistsActionsType | TasksActionsType | ThemeActionType

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction> // AppActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

// @ts-ignore
window.store = store