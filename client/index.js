var Raven = require('raven-js');
Raven.config('http://c920e064debf4482915ed70020890a3b@sentry.jarvys.me/2', {
}).install();

var container = document.querySelector('.container pre');
var report = JSON.stringify(Modernizr, null, 4);
container.innerHTML = report;
Raven.captureMessage(report);
console.log(report);

