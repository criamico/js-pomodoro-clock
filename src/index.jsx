import React from 'react';
import styles from './main.scss';
import Pomodoro from './components/pomodoro/index.jsx';
import MainControls from './components/main-controls.jsx';
import Attribution from './components/attribution.jsx';
import Lib from './library.js';

const defaultState = {
  isRunning: false,
  breakLength: 5,
  sessionLength: 25,
  duration: 1500 // duration is directly in seconds,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    App.displayName = 'App';
    this.state = defaultState;
    this.timerId = 0;
  }
  countDown = () => {
    const elapsed = this.state.duration - 1;
    this.setState({duration: elapsed});
  }
  onStartStop = () => {
    this.setState({isRunning: !this.state.isRunning});
    if (!this.state.isRunning && this.state.duration > 0) {
      this.timerId = setInterval(this.countDown, 1000);
    }
    if (this.state.isRunning || this.state.duration === 0) {
      this.setState({isRunning: false});
      clearInterval(this.timerId);
    }
  }
  onReset = () => {
    this.setState(defaultState);
    clearInterval(this.timerId);
  }
  onSessionIncrement = () => {
    const newLength = this.state.sessionLength + 1;
    const sessionLength = newLength <= 60 ? newLength : 60;
    this.setState({
      sessionLength,
      duration: Lib.minutesToSeconds(sessionLength)
    });
  }
  onSessionDecrement = () => {
    const newLength = this.state.sessionLength - 1;
    const sessionLength = newLength >= 0 ? newLength : 1;
    this.setState({
      sessionLength,
      duration: Lib.minutesToSeconds(sessionLength)
    });
  }
  onBreakIncrement = () => {
    const newLength = this.state.breakLength + 1;
    const breakLength = newLength <= 60 ? newLength : 60;
    this.setState({breakLength});
  }
  onBreakDecrement = () => {
    const newLength = this.state.breakLength - 1;
    const breakLength = newLength >= 0 ? newLength : 1;
    this.setState({breakLength});
  }

  render() {
    return (
      <React.Fragment>
        <h1>
          <em>Yet Another
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
              Pomodoro Clock
            </a>
          </em>
        </h1>
        <Pomodoro duration={this.state.duration}/>
        <MainControls
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          isRunning={this.state.isRunning}
          onStartStop={this.onStartStop}
          onReset={this.onReset}
          onSessionIncrement={this.onSessionIncrement}
          onSessionDecrement={this.onSessionDecrement}
          onBreakIncrement={this.onBreakIncrement}
          onBreakDecrement={this.onBreakDecrement}
        />
        <Attribution />
      </React.Fragment>
    );
  }
}
export default App;
