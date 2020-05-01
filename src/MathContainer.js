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
    CLEAR_USER_ANSWER
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
        this.props.firstNumber()
        this.props.secondNumber()
        this.props.operator()
        this.props.clearUserAnswer()
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.userAnswer(this.state.userAnswer)
        if (this.props.operatorSign === "+") {
            this.props.sumAnswer()
        } else {
            this.props.subtractAnswer()
        }
        this.setState({
            userAnswer: ""
        })
    }

    render() {
        return (
            <div className="wrapper">
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
                        type="number"
                        name="userAnswer" value={this.state.userAnswer}
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
    operatorSign: state.math.operator
})

const mapDispatchToProps = dispatch => ({
    firstNumber: () => dispatch({ type: FIRST_NUMBER }),
    secondNumber: () => dispatch({ type: SECOND_NUMBER }),
    operator: () => dispatch({ type: OPERATOR }),
    sumAnswer: () => dispatch({ type: SUM_ANSWER }),
    subtractAnswer: () => dispatch({ type: SUBTRACT_ANSWER }),
    userAnswer: (userAnswer) => dispatch({ type: USER_ANSWER, payload: userAnswer }),
    clearUserAnswer: () => dispatch({ type: CLEAR_USER_ANSWER })

})

export default connect(mapStateToProps, mapDispatchToProps)(MathContainer)