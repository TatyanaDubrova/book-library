import { AUTHOR, REQUEST, FAIL, SUCCESS } from '../../../constants/actions';

export const INITIAL_STATE = {
    author: {},
    loading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${REQUEST}_${AUTHOR}`:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case `${SUCCESS}_${AUTHOR}`:
            return {
                ...state,
                author: action.author,
                loading: false,
                error: null,
            };

        case `${FAIL}_${AUTHOR}`:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
}
