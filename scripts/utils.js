function getRandomInt(max, min = 1) {
  return Math.floor(Math.random() * max) + min;
} 

function getDateTimeString() {
  var date = new Date();
  return date.toDateString() + ' ' + date.toLocaleTimeString();
};