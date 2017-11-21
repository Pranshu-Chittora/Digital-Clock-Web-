var HElem = document.getElementById('hours');
var MElem = document.getElementById('minutes');
var SElem = document.getElementById('seconds');
var MilElem = document.getElementById('milli');
var ApElem =  document.getElementById('ap');
var HmElem = document.getElementById('hm-blink');
var MsElem = document.getElementById('ms-blink');

HmElem.innerHTML = ":";
MsElem.innerHTML = ":";

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
      HElem.innerHTML = hours;
      MElem.innerHTML = minutes;
      SElem.innerHTML = seconds;
      MilElem.innerHTML = milli;
      ApElem.innerHTML = " " + ap;
}

// Sync the time in real time 
setInterval(timing, 1);