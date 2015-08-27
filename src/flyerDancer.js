var makeFlyerDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node.css({"background-image": "../assets/flyingpikachu.gif", "width": "500" })
  this.$node.addClass("flyerdancer"); 
}

makeFlyerDancer.prototype = Object.create(makeDancer.prototype);
makeFlyerDancer.prototype.constructor = makeFlyerDancer;
makeFlyerDancer.prototype.step = function(){
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
  this.$node.animate({left: "+=300"}, this.timeBetweenSteps + 1000, "swing", function(){
    $(this).css({"background-image": "url(" + "assets/flyrighttoleft.gif" + ")"})    
    this.direction = "lefttoright";
  })
  this.$node.animate({left: "-=300"}, this.timeBetweenSteps + 1000, "swing", function(){
    $(this).css({"background-image": "url(" + "assets/flylefttoright.gif" + ")"})    
    this.direction = "righttoleft";
  })
}
