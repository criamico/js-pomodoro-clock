import React from 'react';
import PropTypes from 'prop-types';
import GenericControls from './generic-controls/index.jsx';

class MainControls extends React.PureComponent {
  constructor(props) {
    super(props);
    MainControls.displayName = 'MainControls';
  }

  render() {
    const { breakLength, sessionLength, onReset, onSessionIncrement, isRunning,
      onSessionDecrement, onBreakIncrement, onBreakDecrement, onStartStop
    } = this.props;
    return (
      <React.Fragment>
        <button
          type="button"
          title="start/stop session"
          id="start_stop"
          onClick={onStartStop}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          type="button"
          title="reset session"
          id="reset"
          onClick={onReset}
        >
          Reset
        </button>
        <h2>Manage your session</h2>
        <div className='session-controls'>
          <GenericControls
            className='break'
            duration={breakLength}
            onIncrement={onBreakIncrement}
            onDecrement={onBreakDecrement}
          />
          <GenericControls
            className='session'
            duration={sessionLength}
            onIncrement={onSessionIncrement}
            onDecrement={onSessionDecrement}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default MainControls;

MainControls.propTypes = {
  breakLength: PropTypes.number,
  sessionLength: PropTypes.number,
  isRunning: PropTypes.bool,
  onStartStop: PropTypes.func,
  onReset: PropTypes.func,
  onSessionIncrement: PropTypes.func,
  onSessionDecrement: PropTypes.func,
  onBreakIncrement: PropTypes.func,
  onBreakDecrement: PropTypes.func
};
