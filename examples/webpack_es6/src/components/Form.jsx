
import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
    static propTypes = {
        title: PropTypes.string
    }

    static defaultProps = {
        title: ''
    }

    constructor (props, context) {
        super(props, context);

        this.state = {
            data: []
        };
    }

    render () {
        return (
          <form>
            <label>First Name</label>
            <input type="text" /><br/>
            <label>Last Name</label>
            <input type="text" />
          </form>);
    }
}

