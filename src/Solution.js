import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INCREASE_SCORE, REDUCE_SCORE, CLEAR_PROBLEM, CLEAR_USER_ANSWER } from './actionTypes'
import { rubberBand } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${rubberBand}`;
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;

class Solution extends Component {

    renderPhrase = () => {
        if (this.props.phrase) {
            return <BouncyDiv key={this.props.phrase}>{this.props.phrase}</BouncyDiv>
        }
    }

    revealSolution = () => {
        if (this.props.userAnswer) {
            if (this.props.answer === parseInt(this.props.userAnswer)) {
                this.props.increaseScore()
                this.props.clearProblem()
                if (this.props.prevOperator === "*") {
                    if (this.props.prevSecondNumber > this.props.prevFirstNumber) {
                        return (
                            <h4>
                                {this.renderPhrase()}
                                {/* <br></br> */}
                                {this.props.prevSecondNumber}{' '}
                                x{' '}
                                {this.props.prevFirstNumber}{' '}
                                =
                                {' '}{this.props.userAnswer}
                            </h4>
                        )
                    } else {
                        return (
                            <h4>
                                {this.renderPhrase()}
                                {/* <br></br> */}
                                {this.props.prevFirstNumber}{' '}
                                x{' '}
                                {this.props.prevSecondNumber}{' '}
                                =
                                {' '}{this.props.userAnswer}
                            </h4>
                        )
                    }
                } else if (this.props.prevOperator === "/") {
                    return (
                        <h4>
                            {this.renderPhrase()}
                            {/* <br></br> */}
                            {this.props.prevFirstNumber}{' '}
                            {'\u00F7'}{' '}
                            {this.props.prevSecondNumber}{' '}
                            =
                            {' '}{this.props.userAnswer}
                        </h4>
                    )
                } else if (this.props.prevSecondNumber > this.props.prevFirstNumber) {
                    return (
                        <h4>
                            {this.renderPhrase()}
                            {/* <br></br> */}
                            {this.props.prevSecondNumber}{' '}
                            {this.props.prevOperator}{' '}
                            {this.props.prevFirstNumber}{' '}
                            =
                            {' '}{this.props.userAnswer}
                        </h4>
                    )
                } else {
                    return (
                        <h4>
                            {this.renderPhrase()}
                            {/* <br></br> */}
                            {this.props.prevFirstNumber}{' '}
                            {this.props.prevOperator}{' '}
                            {this.props.prevSecondNumber}{' '}
                            =
                            {' '}{this.props.userAnswer}
                        </h4>
                    )
                }
            } else {
                this.props.reduceScore()
                return (
                    <h4 style={{ backgroundColor: "rgba(255, 0, 0, 0.7)" }}>
                        <BouncyDiv>
                            {this.props.userAnswer}
                            {' '}
                        is incorrect,
                        <br></br>
                        try again!
                    </BouncyDiv>
                    </h4>
                )
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
    userAnswer: state.math.userAnswer,
    prevFirstNumber: state.math.prevFirstNumber,
    prevOperator: state.math.prevOperator,
    prevSecondNumber: state.math.prevSecondNumber,
    phrase: state.phrases.phrase
})

const mapDispatchToProps = (dispatch) => ({
    increaseScore: () => dispatch({ type: INCREASE_SCORE }),
    reduceScore: () => dispatch({ type: REDUCE_SCORE }),
    clearProblem: () => dispatch({ type: CLEAR_PROBLEM }),
    clearUserAnswer: () => dispatch({ type: CLEAR_USER_ANSWER })
})

export default connect(mapStateToProps, mapDispatchToProps)(Solution)