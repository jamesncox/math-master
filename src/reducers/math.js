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
    MULTIPLY_ANSWER,
    DIVIDE_FIRST_NUMBER,
    DIVIDE_SECOND_NUMBER,
    DIVIDE_OPERATOR,
    DIVIDE_ANSWER
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
            const genMultiplyFirstNumber = Math.floor(Math.random() * 15) + 1
            return { ...state, firstNumber: genMultiplyFirstNumber, prevFirstNumber: genMultiplyFirstNumber }

        case MULTIPLY_SECOND_NUMBER:
            const genMultiplySecondNumber = Math.floor(Math.random() * 15) + 1
            return { ...state, secondNumber: genMultiplySecondNumber, prevSecondNumber: genMultiplySecondNumber }

        case MULTIPLY_OPERATOR:
            const multiplyOperator = "*"
            return { ...state, operator: multiplyOperator, prevOperator: multiplyOperator }

        case MULTIPLY_ANSWER:
            const multiplyAnswer = state.firstNumber * state.secondNumber
            return { ...state, answer: multiplyAnswer }

        case SUM_ANSWER:
            const sumAnswer = state.firstNumber + state.secondNumber
            return { ...state, answer: sumAnswer }

        case SUBTRACT_ANSWER:
            const subtractAnswer = state.firstNumber - state.secondNumber
            return { ...state, answer: subtractAnswer }

        case REVERSE_SUBTRACT_ANSWER:
            const reverseSubtractAnswer = state.secondNumber - state.firstNumber
            return { ...state, answer: reverseSubtractAnswer }

        case DIVIDE_FIRST_NUMBER:
            const divideFirstNumberArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
            const genDivideFirstNumber = divideFirstNumberArray[Math.floor(Math.random() * divideFirstNumberArray.length)]
            return { ...state, firstNumber: genDivideFirstNumber, prevFirstNumber: genDivideFirstNumber }

        case DIVIDE_SECOND_NUMBER:
            const divideSecondNumberArray = [1, 2, 5, 10]
            const genDivideSecondNumber = divideSecondNumberArray[Math.floor(Math.random() * divideSecondNumberArray.length)]
            return { ...state, secondNumber: genDivideSecondNumber, prevSecondNumber: genDivideSecondNumber }

        case DIVIDE_OPERATOR:
            const divideOperator = "/"
            return { ...state, operator: divideOperator, prevOperator: divideOperator }

        case DIVIDE_ANSWER:
            const divideAnswer = state.firstNumber / state.secondNumber
            return { ...state, answer: divideAnswer }

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