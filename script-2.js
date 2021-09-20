function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var box = $('.box');

box.mouseenter(function() {
  box.css("top", randomIntFromInterval(10, 90) + '%');
  box.css("left", randomIntFromInterval(10, 90) + '%');
})

