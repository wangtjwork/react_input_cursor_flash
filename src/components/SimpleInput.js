import React, { Component } from 'react';

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

export default SimpleInput
