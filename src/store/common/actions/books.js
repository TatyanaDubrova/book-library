import {REQUEST, BOOKS} from '../../../constants/actions';

export const getBooks = () => ({
    type: `${REQUEST}_${BOOKS}`
});