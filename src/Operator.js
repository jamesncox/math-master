import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DIVIDE_ANSWER } from './actionTypes'

class Operator extends Component {

    render() {
        if (this.props.operator === "*") {
            return "x"
        } else if (this.props.operator === "/") {
            return (
                <>
                    {'\u00F7'}
                </>
            )
        } else {
            return (
                <>
                    {this.props.operator}
                </>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    operator: state.math.operator
})

export default connect(mapStateToProps)(Operator)