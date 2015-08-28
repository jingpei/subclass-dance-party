var FlyerDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("flyerdancer motion"); 
  // this.$node.append("<span></span>")
}

FlyerDancer.prototype = Object.create(Dancer.prototype);
FlyerDancer.prototype.constructor = FlyerDancer;
FlyerDancer.prototype.step = function(){
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);
}
