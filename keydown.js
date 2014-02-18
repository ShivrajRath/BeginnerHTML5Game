$(function() {
  window.keydown = {};
  
  function keyName(event) {
    var key = {
      37 : "left",
      38 : "up",
      39 : "right",
      40 : "down"
    }
    return key[event.which];
  }
  
  $(document).bind("keydown", function(event) {
    keydown[keyName(event)] = true;
  });
  
  $(document).bind("keyup", function(event) {
    keydown[keyName(event)] = false;
  });
});
