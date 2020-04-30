import {
    INCREASE_SCORE,
    REDUCE_SCORE
} from '../actionTypes'

export default (state = { score: 0 }, action) => {
    switch (action.type) {
        case INCREASE_SCORE:
            return { ...state, score: state.score + 5 }

        case REDUCE_SCORE:
            return { ...state, score: state.score - 5 }

        default:
            return state
    }
}