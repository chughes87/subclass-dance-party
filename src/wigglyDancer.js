var makeWigglyDancer = function(top, left, timeBetweenSteps){
  var wigglyDancer = makeDancer(top, left, timeBetweenSteps);
  var diff = [Math.floor(Math.random()*50)+1,
              Math.floor(Math.random()*50)+1];
  var oldStep = wigglyDancer.step;
  
  wigglyDancer.step = function(){
    oldStep();
    //debugger;
    wigglyDancer.$node.animate({left: '+='+diff[0], top: '+='+diff[1]}, 'linear');
    diff[0] *= -1;
    diff[1] *= -1;
  };
  return wigglyDancer;
};