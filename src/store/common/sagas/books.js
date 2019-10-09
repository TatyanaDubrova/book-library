import { put, takeLatest, call } from 'redux-saga/effects'

import { REQUEST, BOOKS, SUCCESS, FAIL } from '../../../constants/actions'
import { getBooks as getBooksApi } from '../../../api'

export function* getBooks() {
    try {
        const books = yield call(getBooksApi)
        yield put({ type: `${SUCCESS}_${BOOKS}`, books })
    } catch(error) {
        yield put({ type: `${FAIL}_${BOOKS}`, error })
    }

}

export default function booksSaga() {
    return [
        takeLatest(`${REQUEST}_${BOOKS}`, getBooks)
    ]
}
