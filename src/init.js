$(document).ready(function(){
  window.dancers = [];

  window.$catchEmAll = $("<div class='catchem'><img src='assets/catchem.png' /></div>");
  window.$pokeball = $("<div class='pokeball'><img src='assets/pokeball-closed.png' /></div>");
  window.$isPokeballOpen = false;
  $('body').append($pokeball);

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    console.log(dancers.indexOf(dancer));
  });

  $(".makeLineButton").on("click", function(event){
    var leftPos = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      // window.dancers[i].$node.lineUp();
      window.dancers[i].lineUp();
      window.dancers[i].$node.css({left: leftPos})
      leftPos += $(window).width() / window.dancers.length;
    };
  });

  $(".clearAll").on("click", function(event){
    $('.dancer').remove();
    window.dancers = [];
  });

  $(document).on("click", ".dancer", function(event){
    if($isPokeballOpen === true){
      $(this).css({"width": "50px", "height": "50px", "bottom" : "70px", "top": "auto", "left": "70px"});
      if ($(this).hasClass("motion")) {
        $(this).removeClass("motion");
      }
      $(this).fadeOut("slow", function() {
        $(this).remove();
      });
      for (var i = 0; i < window.dancers.length; i++) {
        if($(this)[0] === window.dancers[i].$node[0]){
          window.dancers.splice(i, 1);
        }
      };

      if (window.dancers.length === 0) {
        setTimeout( function(){ $pokeball.children('img').attr('src', 'assets/pokeball-closed.png')}, 1000);
        setTimeout( function(){ $pokeball.removeClass("motion") }, 2000);
        setTimeout( function(){ $pokeball.addClass("motion")}, 2500);
        setTimeout( function(){ $pokeball.removeClass("motion")}, 5000);
        $isPokeballOpen = false;
      }
      // $(this).animate({top: "+=100"});
      // it needs to fly to bottom 100 left 100 from current position 
    }
  })

  $(".catchAll").on("click", function(event){
    $('body').append($catchEmAll);
    $pokeball.addClass("motion");
    $catchEmAll.fadeIn(100);
    setTimeout(function() {
      $pokeball.children('img').attr('src', 'assets/pokeball-open.png');
    }, 2000);
    $isPokeballOpen = true;
    $catchEmAll.fadeOut(3000);
  })

});

