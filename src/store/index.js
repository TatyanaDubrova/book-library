import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import commonReducers from './reducers'
import rootSaga from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    commonReducers(history),
    composeEnhancers(applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
    ))
)

sagaMiddleware.run(rootSaga)
