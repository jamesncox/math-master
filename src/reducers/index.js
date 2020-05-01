import { combineReducers } from 'redux'
import math from '../reducers/math'
import scores from '../reducers/scores'
import phrases from '../reducers/phrases'

const rootReducer = combineReducers(
    {
        math,
        scores,
        phrases
    }
)

export default rootReducer