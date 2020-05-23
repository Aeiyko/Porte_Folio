$(document).ready(()=>{
  var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function() {
      $(".losange").css("opacity","1");
      $(".losange").css("transform","rotate(45deg)");
      $(".Lbar, .Rbar").css("width","190%");
      $(".langage img").css("opacity","1");
    }
  });

});
