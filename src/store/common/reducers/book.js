import { BOOK, REQUEST, FAIL, SUCCESS } from '../../../constants/actions';

export const INITIAL_STATE = {
    book: {},
    loading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${REQUEST}_${BOOK}`:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case `${SUCCESS}_${BOOK}`:
            return {
                ...state,
                book: action.book,
                loading: false,
                error: null,
            };

        case `${FAIL}_${BOOK}`:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
}
