import React, { Component } from 'react'
import { connect } from 'react-redux'

class SecondNumber extends Component {

    render() {
        if (this.props.secondNumber > this.props.firstNumber) {
            return (
                <>
                    {this.props.firstNumber}
                </>
            )
        } else {
            return (
                <>
                    {this.props.secondNumber}
                </>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    secondNumber: state.math.secondNumber,
    firstNumber: state.math.firstNumber
})

export default connect(mapStateToProps)(SecondNumber)