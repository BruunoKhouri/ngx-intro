import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
    counter: number;
}

export const InitalState: IAppState = {
    counter: 2
}

export const incrementaCount = createAction('[App] Aumenta contador');
export const decrementaCount = createAction('[App] Diminui contador');

export const appReducer = createReducer(
    InitalState,
    on(incrementaCount, (state) => {
        state = {
            ...state,
            counter: state.counter + 1
        }
        return state;
    }),
    on(decrementaCount, (state) => {
        state = {
            ...state,
            counter: state.counter - 1
        }
        return state;
    })
)