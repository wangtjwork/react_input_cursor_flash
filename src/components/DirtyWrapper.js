import React, { Component } from 'react';
import { updateInput, slowUpdateInput } from '../actions';

const DirtyWrapper = (ChildComponent, delayTime) => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirty: false
    }
  }

  setField = (value) => {
    // switch between the blocks below to see the affect of async actions has on the input element

    // Using window.setTimeout to make it async
    // window.setTimeout(() => {
    //   this.props.dispatch(updateInput(value));
    // }, 1);

    // Using Promise to make it async
    // Promise.resolve().then(() => {
    //   this.props.dispatch(updateInput(value));
    // });

    // Using this.setState to make it async
    this.setState({isDirty: true}, () => {
      if (!delayTime) {
        this.props.dispatch(updateInput(value));
      } else {
        window.setTimeout(() => {
          this.props.dispatch(slowUpdateInput(value));
        }, delayTime);
      }
    });
  }

  render() {
    return <ChildComponent {...this.state} {...this.props} setField={this.setField} />
  }
}

export default DirtyWrapper;
