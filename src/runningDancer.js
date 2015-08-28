var RunningDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("running-dancer motion"); 
  this.$node.append("<span></span>")
  this.currentDistanceFromTop = 0;
}

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;
RunningDancer.prototype.step = function(){
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);
}
