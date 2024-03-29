(function() {
    "use strict";
    var secondsLabel = document.getElementById('seconds'),
    minutesLabel = document.getElementById('minutes'), 
    hoursLabel = document.getElementById('hours'), totalSeconds = 0, 
    startButton = document.getElementById('start'), 
    stopButton = document.getElementById('stop'), 
    resetButton = document.getElementById('reset'), timer = null;
  
    startButton.onclick = function() {
      if (!timer) {
        timer = setInterval(setTime, 1000);
      }
    };
  
    stopButton.onclick = function() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
  
    resetButton.onclick = function() {
      if (timer) {
        totalSeconds = 0;
        stop();
      }
    };
  
    function setTime() {
      totalSeconds++;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
      hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600))
    }
  
    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
  
  })();