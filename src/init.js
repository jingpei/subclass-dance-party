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
  });

  $(".makeLineButton").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      // window.dancers[i].$node.lineUp();
      window.dancers[i].lineUp();
    };
  });

  $(".clearAll").on("click", function(event){
    $('.dancer').remove();
  });

  $(document).on("click", ".dancer", function(event){
    if($isPokeballOpen === true){
      console.log("clicked");
      // $(this).css("width", "");
      // clearInterval();
      // $(this).attr('style', "top: " + $(this).css("top") + "; left: " + $(this).css("left") + "; border-radius: 0px; width: 50px; height: 50px; overflow: hidden; background-color: transparent;")
      $(this).stop();
      $(this).css({"width": "50px", "height": "50px", "bottom" : "70px", "top": "auto", "left": "70px"});
      // $(this).animate({top: "+=100"});
      // it needs to fly to bottom 100 left 100 from current position 
    }
  })

  $(".catchAll").on("click", function(event){
    $('body').append($catchEmAll);
    $catchEmAll.fadeIn(100);
    $pokeball.children('img').attr('src', 'assets/pokeball-open.png');
    $isPokeballOpen = true;
    $catchEmAll.fadeOut(3000);
  })

});

