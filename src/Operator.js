import React, { Component } from 'react'
import { connect } from 'react-redux'

class Operator extends Component {

    render() {
        if (this.props.operator === "*") {
            return "x"
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