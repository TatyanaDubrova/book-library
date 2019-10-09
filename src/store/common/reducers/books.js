import { BOOKS, REQUEST, FAIL, SUCCESS } from '../../../constants/actions';

export const INITIAL_STATE = {
    books: [],
    loading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${REQUEST}_${BOOKS}`:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case `${SUCCESS}_${BOOKS}`:
            return {
                ...state,
                books: action.books,
                loading: false,
                error: null,
            };

        case `${FAIL}_${BOOKS}`:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
}
