var makeFadingDancer = function(top, left, timeBetweenSteps){
  var expandingDancer = makeDancer(top, left, timeBetweenSteps);
  var maxSize = 1;//Math.random();
  var minSize = 0;//Math.random();
  var expand = -1;

  var oldStep = expandingDancer.step;
  expandingDancer.step = function(){
    oldStep();
    //debugger;
    var percent = expand<0 ? maxSize : minSize;
    expand *= -1;
    expandingDancer.$node.animate({opacity: percent});
  };
  return expandingDancer;
};