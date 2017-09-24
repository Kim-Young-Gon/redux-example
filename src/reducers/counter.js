import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dummy: 'dummydumb',
    dummyObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

export default function counter(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case types.INCREAMENT:
            return {
                ...state,
                number: state.number + 1,
                dummyObject: {
                    ...state.dummyObject,
                    u: 0
                }
            };
        case types.DECREAMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
}