import {
    FIRST_NUMBER,
    SECOND_NUMBER,
    OPERATOR,
    SUM_ANSWER,
    SUBTRACT_ANSWER,
    USER_ANSWER,
    CLEAR_USER_ANSWER,
    CLEAR_PROBLEM,
    REVERSE_SUBTRACT_ANSWER,
    MEDIUM_SECOND_NUMBER,
    HARD_FIRST_NUMBER,
    MULTIPLY_FIRST_NUMBER,
    MULTIPLY_SECOND_NUMBER,
    MULTIPLY_OPERATOR,
    MULTIPLY_ANSWER
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

        case HARD_FIRST_NUMBER:
            const genHardFirstNumber = Math.floor(Math.random() * 1000 + 1)
            return { ...state, firstNumber: genHardFirstNumber, prevFirstNumber: genHardFirstNumber }

        case SECOND_NUMBER:
            const genSecondNumber = Math.floor(Math.random() * 10)
            return { ...state, secondNumber: genSecondNumber, prevSecondNumber: genSecondNumber }

        case MEDIUM_SECOND_NUMBER:
            const genMediumSecondNumber = Math.floor(Math.random() * 100)
            return { ...state, secondNumber: genMediumSecondNumber, prevSecondNumber: genMediumSecondNumber }

        case OPERATOR:
            const operations = ["+", "-"]
            const genOperator = operations[Math.floor(Math.random() * operations.length)]
            return { ...state, operator: genOperator, prevOperator: genOperator }

        case MULTIPLY_FIRST_NUMBER:
            const genMultiplyFirstNumber = Math.floor(Math.random() * 12) + 1
            return { ...state, firstNumber: genMultiplyFirstNumber, prevFirstNumber: genMultiplyFirstNumber }

        case MULTIPLY_SECOND_NUMBER:
            const genMultiplySecondNumber = Math.floor(Math.random() * 12) + 1
            return { ...state, secondNumber: genMultiplySecondNumber, prevSecondNumber: genMultiplySecondNumber }

        case MULTIPLY_OPERATOR:
            const multiplyOperator = "*"
            return { ...state, operator: multiplyOperator, prevOperator: multiplyOperator }

        case SUM_ANSWER:
            const sumAnswer = state.firstNumber + state.secondNumber
            return { ...state, answer: sumAnswer }

        case SUBTRACT_ANSWER:
            const subtractAnswer = state.firstNumber - state.secondNumber
            return { ...state, answer: subtractAnswer }

        case REVERSE_SUBTRACT_ANSWER:
            const reverseSubtractAnswer = state.secondNumber - state.firstNumber
            return { ...state, answer: reverseSubtractAnswer }

        case MULTIPLY_ANSWER:
            const multiplyAnswer = state.firstNumber * state.secondNumber
            return { ...state, answer: multiplyAnswer }

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