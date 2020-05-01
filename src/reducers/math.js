import {
    FIRST_NUMBER,
    SECOND_NUMBER,
    OPERATOR,
    SUM_ANSWER,
    SUBTRACT_ANSWER,
    USER_ANSWER,
    CLEAR_USER_ANSWER,
    CLEAR_PROBLEM
} from '../actionTypes/'

export default (state = {
    firstNumber: null,
    secondNumber: null,
    operator: null,
    answer: null,
    userAnswer: "",
    prevFirstNumber: null,
    prevSecondNumber: null,
    prevOperator: null
}, action) => {
    switch (action.type) {
        case FIRST_NUMBER:
            const genFirstNumber = Math.floor(Math.random() * 100 + 1)
            return { ...state, firstNumber: genFirstNumber, prevFirstNumber: genFirstNumber }

        case SECOND_NUMBER:
            const genSecondNumber = Math.floor(Math.random() * 10)
            return { ...state, secondNumber: genSecondNumber, prevSecondNumber: genSecondNumber }

        case OPERATOR:
            const operations = ["+", "-"]
            const genOperator = operations[Math.floor(Math.random() * operations.length)]
            return { ...state, operator: genOperator, prevOperator: genOperator }

        case SUM_ANSWER:
            const sumAnswer = state.firstNumber + state.secondNumber
            return { ...state, answer: sumAnswer }

        case SUBTRACT_ANSWER:
            const subtractAnswer = state.firstNumber - state.secondNumber
            return { ...state, answer: subtractAnswer }

        case USER_ANSWER:
            return { ...state, userAnswer: action.payload }

        case CLEAR_USER_ANSWER:
            return { ...state, userAnswer: "" }

        case CLEAR_PROBLEM:
            return { ...state, firstNumber: null, secondNumber: null, operator: null }

        default:
            return state
    }
}