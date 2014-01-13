var makeExpandingDancer = function(top, left, timeBetweenSteps){
  var expandingDancer = makeDancer(top, left, timeBetweenSteps);
  var maxSize = Math.random()*100;
  var minSize = Math.random()*50;
  var expand = -1;

  var oldStep = expandingDancer.step;
  expandingDancer.step = function(){
    oldStep();
    var percent = expand<0 ? maxSize : minSize;
    expand *= -1;
    expandingDancer.$node.animate({width:percent, height:percent});
  };
  return expandingDancer;
};