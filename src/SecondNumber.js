import React, { Component } from 'react'
import { connect } from 'react-redux'

class SecondNumber extends Component {

    render() {
        return (
            <>
                {this.props.secondNumber}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    secondNumber: state.math.secondNumber
})

export default connect(mapStateToProps)(SecondNumber)