import React, { Component } from 'react'
import { connect } from 'react-redux'

class Operator extends Component {

    render() {
        return (
            <>
                {this.props.operator}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    operator: state.math.operator
})

export default connect(mapStateToProps)(Operator)