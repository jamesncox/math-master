import { combineReducers } from 'redux'
import math from '../reducers/math'
import scores from '../reducers/scores'

const rootReducer = combineReducers(
    {
        math,
        scores
    }
)

export default rootReducer