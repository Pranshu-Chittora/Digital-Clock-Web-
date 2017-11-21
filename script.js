// Creating a function for time 
function timing() {
      const full = new Date(); //Method for Date time 
      var ap = "a.m.";//For a.m. & p.m.
      var hours = full.getHours();
      var minutes = full.getMinutes();
      var seconds = full.getSeconds();
      var milli = full.getMilliseconds();
      //Conditions for 0 as a prefix for values in single digit
      // And a.m. & p.m.
      if (hours >= 12) {
            ap = "p.m.";
      }
      if (hours < 10) {
            hours = "0" + hours;
      }
      if (minutes < 10) {
            minutes = "0" + minutes;
      }
      if (seconds < 10) {
            seconds = "0" + seconds;
      }
      if (milli < 10) {
            milli = "00" + milli;
      } else if (milli >= 10 && milli < 100) {
            milli = "0" + milli;
      }
      // To make the clock a 12 hour clock
      if (hours >12)
      {
            hours-=12;
      }
      
      //Injecting time data
      document.getElementById('hours').innerHTML = hours;
      document.getElementById('minutes').innerHTML = minutes;
      document.getElementById('seconds').innerHTML = seconds;
      document.getElementById('milli').innerHTML = milli;
      document.getElementById('ap').innerHTML = " " + ap;
      document.getElementById('hm-blink').innerHTML = ":";
      document.getElementById('ms-blink').innerHTML = ":";

}






// Sync the time in real time 
setInterval(timing, 1);