import React, { Component } from 'react'
import { connect } from 'react-redux'
import { merge, fadeInDown, bounceIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const fadeBounce = merge(bounceIn, fadeInDown)
const bounceAnimation = keyframes`${bounceIn}`;
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
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