import { AUTHORS, REQUEST, FAIL, SUCCESS } from '../../../constants/actions';

export const INITIAL_STATE = {
    authors: [],
    loading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${REQUEST}_${AUTHORS}`:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case `${SUCCESS}_${AUTHORS}`:
            return {
                ...state,
                authors: action.authors,
                loading: false,
                error: null,
            };

        case `${FAIL}_${AUTHORS}`:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
}
