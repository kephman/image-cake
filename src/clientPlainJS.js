// -- test functionAlity -- //
function funAlity() {
    console.log('Does this function function?'); // eslint-disable-line
}
funAlity();
// -- test functionParameters -- //
function funPara(param1, param2, param3) {
    var age = (param2 + param3);  // eslint-disable-line
    var message = (param1 + age);  // eslint-disable-line
    document.getElementById('playground')
        .innerHTML = message;
}

funPara('I am ', 30, 8);

// Function toys for Nov15 //

/* var year = (timeBetween);
var month = ();
var day = ();
var min = ();
var sec = (Math.floor(timeBetween/1000)); */

// returns current date and sets birthdate
var birthday = Date.parse('03 Jan 1980 03:35:00 GMT'); // millisecs from 0hour to bday
var current = Date.now(); // millisecs from 0 hour to now
var msDiff = (current - birthday); // how many millisecs between now and bday
// Use this next line for calculating from seconds
var secs = (msDiff / 1000); // convert milliseconds to seconds = Age in Seconds
var spy = (31557600) // number of seconds in a Earth year - avg not calendar or leap
var years = (Math.floor(secs / spy)); // rounded down years alive to whole number

function monthsByDays() {
    var yearSeconds = (secs - (years*spy)); //seconds left after years totaled
    var sPD = (365.25 / spy);
    var m0S = (31 * sPD);
    var m1S = (28.25 * sPD);
    var m2S = (31 * sPD);
    var m3S = (30 * sPD);
    var m4S = (31 * sPD);
    var m5S = (30 * sPD);
    var m6S = (31 * sPD);
    var m7S = (31 * sPD);
    var m8S = (30 * sPD);
    var m9S = (31 * sPD);
    var m10S = (30 * sPD);
    var m11S = (31 * sPD);
    function testNum(totalSPM) {
        if (SPM > m0S) {
          action? "go to condition 2"

         else
          return "1";
        if (SPM > (m0S + m1S))
        else
            return "2";
        if (SPM > (m0S + m1S + m2S))
            return "3"
        if (SPM > (m0S + m1S + m2S + m3S))
            return "4"
        if (SPM > (m0S + m1S + m2S + m4S))
            return "5"
        if (SPM > (m0S + m1S + m2S + m4S + m5S))
            return "6"
        if (SPM > (m0S + m1S + m2S + m4S + m5S + m6S))
            return "7"
        if (SPM > (m0S + m1S + m2S + m4S + m5S + m6S +m7S))
            return "8"
        if (SPM > (m0S + m1S + m2S + m4S + m5S + m6S +m7S +m8S))
            return "9"
        if (SPM > (m0S + m1S + m2S + m4S + m5S + m6S +m7S +m8S m9S))
            return "10"
        if (SPM > (m0S + m1S + m2S + m4S + m5S + m6S +m7S +m8S m9S + m10S))
            return "11"
        if (SPM > (m0S + m1S + m2S + m4S + m5S + m6S +m7S +m8S m9S + m10S +m11S))
            return "12"
            // store this number into a variable and keep a running total of seconds
            // used in these months as monthSeconds.
      }
}
// ys - ms = total seconds left after months - convert these seconds into weeks = ws/604800
    var weeksLeft = (Math.floor((yearSeconds - monthSeconds)/604800)); // 604800 per week
    var daysLeft = (Math.floor(monthSeconds - (weeksLeft * 604800))/86400); // 86400 seconds per day
    var hoursLeft = (Math.floor((daysLeft * 86400) -   // 3600 seconds per hour
    var minutesLeft = (// 60 seconds per minute

        // no rounding
    ys - ms = total seconds left/604800 = weeks.remainder


yearSeconds - monthSeconds - weekSeconds
