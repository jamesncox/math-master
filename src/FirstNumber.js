import React, { Component } from 'react'
import { connect } from 'react-redux'

class FirstNumber extends Component {

    render() {
        return (
            <>
                {this.props.firstNumber}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    firstNumber: state.math.firstNumber
})

export default connect(mapStateToProps)(FirstNumber)