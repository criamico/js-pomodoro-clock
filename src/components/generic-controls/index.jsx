import React from 'react';
import PropTypes from 'prop-types';
import style from './index.scss';

class GenericControls extends React.Component {
  constructor(props) {
    GenericControls.displayName = 'GenericControls';
    super(props);
  }

  render() {
    const { duration, className, onIncrement, onDecrement
    } = this.props;
    return (
      <div className="controls">
        <h3 id={`${className}-label`}>{`${className} length`}</h3>
        <div className="controls-buttons">
          <button
            type="button"
            title="increment"
            id={`${className}-decrement`}
            onClick={onDecrement}
          >
            -
          </button>
          <div
            className="controls-duration"
            id={`${className}-length`}
          >
            {duration}
          </div>
          <button
            type="button"
            title="decrement"
            id={`${className}-increment`}
            onClick={onIncrement}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default GenericControls;


GenericControls.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};
