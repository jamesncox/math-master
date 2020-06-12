import React, { Component } from 'react'
import { connect } from 'react-redux'
import { merge, zoomOut, flash } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const fadeBounce = merge(flash, zoomOut)
const bounceAnimation = keyframes`${fadeBounce}`;
const BouncyDiv = styled.div`
  animation: 1s 1 ${bounceAnimation};
`;

class Score extends Component {

    render() {
        return (
            <div className="score-box">
                <p>Score</p>
                <BouncyDiv key={this.props.score}>{this.props.score}</BouncyDiv>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    score: state.scores.score
})

export default connect(mapStateToProps)(Score)