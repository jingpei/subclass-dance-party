var MoveLeftDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({"background": "green", "border-radius": "10px"});
}

MoveLeftDancer.prototype = Object.create(Dancer.prototype);
MoveLeftDancer.prototype.constructor = MoveLeftDancer;

MoveLeftDancer.prototype.step = function() {
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);
  this.$node.animate({left: "+=500"});
  this.$node.animate({left: "-=500"});
}