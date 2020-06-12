import React, { Component } from 'react'
import { connect } from 'react-redux'
import FirstNumber from './FirstNumber'
import SecondNumber from './SecondNumber'
import Operator from './Operator'
import Solution from './Solution'
import Score from './Score'
import {
    FIRST_NUMBER,
    SECOND_NUMBER,
    OPERATOR,
    SUM_ANSWER,
    USER_ANSWER,
    SUBTRACT_ANSWER,
    REVERSE_SUBTRACT_ANSWER,
    CLEAR_USER_ANSWER,
    SUCCESS_PHRASE,
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
} from './actionTypes'

class MathContainer extends Component {

    state = {
        userAnswer: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const selectedDifficulty = document.getElementById("selectedDifficulty")

        if (selectedDifficulty.value === "easy") {
            this.props.firstNumber()
            this.props.secondNumber()
            this.props.operator()
        } else if (selectedDifficulty.value === "medium") {
            this.props.firstNumber()
            this.props.mediumSecondNumber()
            this.props.operator()
        } else if (selectedDifficulty.value === "hard") {
            this.props.hardFirstNumber()
            this.props.mediumSecondNumber()
            this.props.operator()
        } else if (selectedDifficulty.value === "multiply") {
            this.props.multiplyFirstNumber()
            this.props.multiplySecondNumber()
            this.props.multiplyOperator()
        } else if (selectedDifficulty.value === "divide") {
            this.props.divideFirstNumber()
            this.props.divideSecondNumber()
            this.props.divideOperator()
        } else {
            return null
        }

        this.props.successPhrase()
        this.props.clearUserAnswer()
    };

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.props.operatorSign === null) {
            e.preventDefault()
        } else {
            this.props.userAnswer(this.state.userAnswer)

            if (this.props.operatorSign === "+") {
                this.props.sumAnswer()
            } else if (this.props.operatorSign === "*") {
                this.props.multiplyAnswer()
            } else if (this.props.operatorSign === "/") {
                this.props.divideAnswer()
            } else if (this.props.numberOne > this.props.numberTwo) {
                this.props.subtractAnswer()
            } else {
                this.props.reverseSubtractAnswer()
            }

            this.setState({
                userAnswer: ""
            })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <p className="select-difficulty">select level</p>
                <select className="select" id="selectedDifficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="multiply">Multiply</option>
                    <option value="divide">Divide</option>
                </select>
                <Score />
                <button style={{ marginTop: "20px" }} onClick={this.handleClick}>Generate equation</button>
                <Solution />
                <div className="math-box">
                    <FirstNumber />
                </div>
                <div className="math-box">
                    <Operator />
                </div>
                <div className="math-box">
                    <SecondNumber />
                </div>
                <h2>=</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        className="answer-box"
                        inputMode="numeric"
                        pattern="[0-9]"
                        type="number"
                        name="userAnswer"
                        value={this.state.userAnswer}
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        className="button"
                        type="submit"
                        value="Submit Answer"
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    operatorSign: state.math.operator,
    numberOne: state.math.firstNumber,
    numberTwo: state.math.secondNumber

})

const mapDispatchToProps = dispatch => ({
    firstNumber: () => dispatch({ type: FIRST_NUMBER }),
    secondNumber: () => dispatch({ type: SECOND_NUMBER }),
    operator: () => dispatch({ type: OPERATOR }),
    sumAnswer: () => dispatch({ type: SUM_ANSWER }),
    subtractAnswer: () => dispatch({ type: SUBTRACT_ANSWER }),
    reverseSubtractAnswer: () => dispatch({ type: REVERSE_SUBTRACT_ANSWER }),
    userAnswer: (userAnswer) => dispatch({ type: USER_ANSWER, payload: userAnswer }),
    clearUserAnswer: () => dispatch({ type: CLEAR_USER_ANSWER }),
    successPhrase: () => dispatch({ type: SUCCESS_PHRASE }),
    mediumSecondNumber: () => dispatch({ type: MEDIUM_SECOND_NUMBER }),
    hardFirstNumber: () => dispatch({ type: HARD_FIRST_NUMBER }),
    multiplyFirstNumber: () => dispatch({ type: MULTIPLY_FIRST_NUMBER }),
    multiplySecondNumber: () => dispatch({ type: MULTIPLY_SECOND_NUMBER }),
    multiplyOperator: () => dispatch({ type: MULTIPLY_OPERATOR }),
    multiplyAnswer: () => dispatch({ type: MULTIPLY_ANSWER }),
    divideFirstNumber: () => dispatch({ type: DIVIDE_FIRST_NUMBER }),
    divideSecondNumber: () => dispatch({ type: DIVIDE_SECOND_NUMBER }),
    divideOperator: () => dispatch({ type: DIVIDE_OPERATOR }),
    divideAnswer: () => dispatch({ type: DIVIDE_ANSWER })
})

export default connect(mapStateToProps, mapDispatchToProps)(MathContainer)