import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducers as common } from './common'

const commonReducers = history => combineReducers({
    router: connectRouter(history),
    ...common
})

export default commonReducers
