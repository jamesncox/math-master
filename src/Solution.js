import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INCREASE_SCORE, REDUCE_SCORE, CLEAR_PROBLEM } from './actionTypes'

class Solution extends Component {

    revealSolution = () => {
        if (this.props.userAnswer !== "") {
            if (this.props.answer === parseInt(this.props.userAnswer)) {
                this.props.increaseScore()
                this.props.clearProblem()
                return <h4>{this.props.userAnswer} is correct! </h4>
            } else {
                this.props.reduceScore()
                // this.props.clearProblem()
                return <h4 style={{ backgroundColor: "rgba(255, 0, 0, 0.8)" }}>{this.props.userAnswer} is incorrect, try again! </h4>
            }
        }
    }

    render() {
        return (
            <>
                {this.revealSolution()}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    operator: state.math.operator,
    answer: state.math.answer,
    userAnswer: state.math.userAnswer
})

const mapDispatchToProps = (dispatch) => ({
    increaseScore: () => dispatch({ type: INCREASE_SCORE }),
    reduceScore: () => dispatch({ type: REDUCE_SCORE }),
    clearProblem: () => dispatch({ type: CLEAR_PROBLEM })
})

export default connect(mapStateToProps, mapDispatchToProps)(Solution)