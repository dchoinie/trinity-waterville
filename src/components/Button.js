import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
    static propTypes = {
        text: String
    }

    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}
