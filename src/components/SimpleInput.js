import React, { Component } from 'react';
import { connect } from 'react-redux';
import DirtyWrapper from './DirtyWrapper';

class SimpleInput extends Component {
  render() {
    const { setField, inputValue } = this.props;
    return <input
      type="text"
      value={inputValue}
      style={{width: '150px', height: '50px'}}
      onChange={e => setField(e.target.value)}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

export default connect(mapStateToProps)(DirtyWrapper(SimpleInput));
