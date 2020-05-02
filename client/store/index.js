import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import {allEmotionsReducer} from './emotionData'
import {allImpressionsReducer} from './impressions'

const reducer = combineReducers({
  user,
  emotions: allEmotionsReducer,
  impressions: allImpressionsReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
