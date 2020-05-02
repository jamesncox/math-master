import React, { Component } from 'react'
import { connect } from 'react-redux'

class FirstNumber extends Component {

    render() {
        if (this.props.secondNumber > this.props.firstNumber) {
            return (
                <>
                    {this.props.secondNumber}
                </>
            )
        } else {
            return (
                <>
                    {this.props.firstNumber}
                </>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    firstNumber: state.math.firstNumber,
    secondNumber: state.math.secondNumber
})

export default connect(mapStateToProps)(FirstNumber)