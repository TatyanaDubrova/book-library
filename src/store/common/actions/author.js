import {REQUEST, AUTHOR} from '../../../constants/actions';

export const getAuthor = (query = {}) => ({
        type: `${REQUEST}_${AUTHOR}`,
        query
    });