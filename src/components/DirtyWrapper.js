import React, { Component } from 'react';
import { updateInput } from '../actions';

const DirtyWrapper = (ChildComponent) => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirty: false
    }
  }

  setField = (value) => {
    this.setState({isDirty: true}, () => {
      this.props.dispatch(updateInput(value));
    });
  }

  render() {
    return <ChildComponent {...this.state} {...this.props} setField={this.setField} />
  }
}

export default DirtyWrapper
