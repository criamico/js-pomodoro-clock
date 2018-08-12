"use strict";

(function() {
  var timeoutID,
    isRunning = false; //flag that says if the timer is running or not

  function countDown(target) {
    var elapsed,
      newTime,
      time = new Date(),
      audio = document.getElementsByTagName("audio")[0];

    // calculate the time elapsed
    time.setMinutes(target.textContent.split(":")[0]);
    time.setSeconds(target.textContent.split(":")[1]);
    elapsed = new Date(time.valueOf() - 1000);
    newTime = elapsed
      .toTimeString()
      .split(" ")[0]
      .split(":");
    target.textContent = String(newTime[1]) + ":" + String(newTime[2]);
    isRunning = true;
    timeoutID = setTimeout(function() {
      countDown(target);
    }, 1000);

    // if 00:00, reset timer & play alarm
    if (String(newTime[1]) === "00" && String(newTime[2]) === "00") {
      audio.play();
      stopCountDown();
    }
  }

  // stop the timer
  function stopCountDown() {
    if (timeoutID !== undefined) {
      window.clearTimeout(timeoutID);
      isRunning = false;
      console.log(isRunning);
    }
  }

  window.onload = function() {
    var tag = document.getElementById("time"),
      duration = "25:00";

    tag.textContent = duration;

    document.getElementById("start").onclick = function start() {
      // if arrived to 0, reset the counter
      if (tag.textContent === "00:00") tag.textContent = duration;
      countDown(tag);
    };
    // reset the session
    document.getElementById("reset").onclick = function reset() {
      tag.textContent = duration;
      stopCountDown();
    };
    // stop the session (doesn't reset the counter)
    document.getElementById("stop").onclick = function stop() {
      stopCountDown();
    };

    function incrDecr(flag) {
      var Sec, Min, newSec, newMin;

      if (!isRunning) {
        Min = Number(tag.textContent.split(":")[0]);
        Sec = Number(tag.textContent.split(":")[1]);

        if (flag === "plus" && Min < 60) {
          Min += 5;
        } else if (flag === "minus" && Min > 0) {
          Min -= 5;
        }
        Sec < 10 ? (newSec = "0" + String(Sec)) : (newSec = String(Sec));
        Min < 10 ? (newMin = "0" + String(Min)) : (newMin = String(Min));
        console.log(newMin, newSec);

        tag.textContent = newMin + ":" + newSec;
      }
    }

    document.getElementById("plus").onclick = function() {
      incrDecr("plus");
    };
    document.getElementById("minus").onclick = function() {
      incrDecr("minus");
    };

    // http://www.freesfx.co.uk/rx2/mp3s/5/16902_1461333025.mp3
  };
})();
