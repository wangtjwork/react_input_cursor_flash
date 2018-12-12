import SimpleInput from './SimpleInput';
import { connect } from 'react-redux';
import DirtyWrapper from './DirtyWrapper';

const mapStateToProps = (state) => {
  return {
    inputValue: state.jumpingInput
  }
}

export default connect(mapStateToProps)(DirtyWrapper(SimpleInput));
