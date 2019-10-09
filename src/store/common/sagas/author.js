import { put, takeLatest, call } from 'redux-saga/effects'

import { REQUEST, AUTHOR, SUCCESS, FAIL } from '../../../constants/actions'
import { getAuthor as getAuthorApi } from '../../../api'

export function* getAuthor({ query }) {
    try {
        const  author = yield call(getAuthorApi, query)
        yield put({ type: `${SUCCESS}_${AUTHOR}`, author })
    } catch(error) {
        yield put({ type: `${FAIL}_${AUTHOR}`, error })
    }

}

export default function authorSaga() {
    return [
        takeLatest(`${REQUEST}_${AUTHOR}`, getAuthor)
    ]
}
