import {REQUEST, AUTHORS} from '../../../constants/actions';

export const getAuthors = () => ({
        type: `${REQUEST}_${AUTHORS}`
    });