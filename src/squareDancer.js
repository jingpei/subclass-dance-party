var makeSquareDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node.css({"background-image": "../assets/flyingpikachu.gif", "width": "500" })
  this.$node.addClass("squaredancer"); 
}

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;
makeSquareDancer.prototype.step = function(){
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);

  this.$node.animate({left: "+=300"});
  this.$node.animate({top: "+=300"});
  this.$node.animate({left: "-=300"});
  this.$node.animate({top: "-=300"});
}
