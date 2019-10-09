import { put, takeLatest, call } from 'redux-saga/effects'

import { REQUEST, BOOK, SUCCESS, FAIL } from '../../../constants/actions'
import { getBook as getBookApi } from '../../../api'

export function* getBook({ query }) {
    try {
        const  book = yield call(getBookApi, query)
        yield put({ type: `${SUCCESS}_${BOOK}`, book })
    } catch(error) {
        yield put({ type: `${FAIL}_${BOOK}`, error })
    }

}

export default function bookSaga() {
    return [
        takeLatest(`${REQUEST}_${BOOK}`, getBook)
    ]
}
