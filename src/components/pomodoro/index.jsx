import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import Lib from '../../library.js';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    Pomodoro.displayName = 'Pomodoro';
  }

  render() {
    const elapsedTime = Lib.secondsToString(this.props.duration);
    return (
      <div className="clock">
        <div className="pomodoro">
          <div id="leaf"/>
          <p
            className="counter"
            id="time-left"
          >
            {elapsedTime}
          </p>
          <p
            className="label"
            id="timer-label"
          >
            session
          </p>
          {/* <audio
            src="http://www.freesfx.co.uk/rx2/mp3s/5/16902_1461333025.mp3"
            type="audio/wav">
          </audio> */}
        </div>
      </div>
    );
  }
}
export default Pomodoro;

Pomodoro.propTypes = {
  duration: PropTypes.number
};
