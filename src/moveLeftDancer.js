var makeMoveLeftDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({"background": "green", "border-radius": "10px"});
}

makeMoveLeftDancer.prototype = Object.create(makeDancer.prototype);
makeMoveLeftDancer.prototype.constructor = makeMoveLeftDancer;

makeMoveLeftDancer.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
  this.$node.animate({left: "+=500"});
  this.$node.animate({left: "-=500"});
}