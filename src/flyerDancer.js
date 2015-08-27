var makeFlyerDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("flyerdancer"); 
  this.$node.append("<span></span>")
}

makeFlyerDancer.prototype = Object.create(makeDancer.prototype);
makeFlyerDancer.prototype.constructor = makeFlyerDancer;
makeFlyerDancer.prototype.step = function(){
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
}
