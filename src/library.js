let library = {
  getTimeFromString: function(timeString) {
    if (!timeString) return {minutes: 0, seconds: 0};
    return {
      minutes: Number(timeString.split(':')[0]),
      seconds: Number(timeString.split(':')[1])
    };
  },
  minutesToSeconds: function(minutes) {
    return minutes * 60;
  },
  secondsToString: function(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return String(minutes) + ':' + String(remainingSeconds);
  }
};

module.exports = library;
