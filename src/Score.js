import React, { Component } from 'react'
import { connect } from 'react-redux'

class Score extends Component {

    render() {
        return (
            <div className="score-box">
                <p>Points</p>
                {this.props.score}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    score: state.scores.score
})

export default connect(mapStateToProps)(Score)