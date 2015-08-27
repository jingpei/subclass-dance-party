var makeRunningDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("running-dancer motion"); 
  this.$node.append("<span></span>")
}

makeRunningDancer.prototype = Object.create(makeDancer.prototype);
makeRunningDancer.prototype.constructor = makeRunningDancer;
makeRunningDancer.prototype.step = function(){
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
}
