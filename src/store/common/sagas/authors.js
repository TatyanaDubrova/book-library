import { put, takeLatest, call } from 'redux-saga/effects'

import { REQUEST, AUTHORS, SUCCESS, FAIL } from '../../../constants/actions'
import { getAuthors as getAuthorsApi } from '../../../api'

export function* getAuthors() {
    try {
        const  authors = yield call(getAuthorsApi)
        yield put({ type: `${SUCCESS}_${AUTHORS}`, authors })
    } catch(error) {
        yield put({ type: `${FAIL}_${AUTHORS}`, error })
    }

}

export default function authorsSaga() {
    return [
        takeLatest(`${REQUEST}_${AUTHORS}`, getAuthors)
    ]
}
