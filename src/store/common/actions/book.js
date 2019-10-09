import {REQUEST, BOOK} from '../../../constants/actions';

export const getBook = (query = {}) => ({
        type: `${REQUEST}_${BOOK}`,
        query
    });