$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var animalInput = parseInt($("#animal").val());

    if (animalInput === 1){
      $(".remove").hide();
      $("#turtles").show();
    }
    else if (animalInput === 2){
      $(".remove").hide();
      $("#snakes").show();
    }
    else {
      $(".remove").hide();
      $("#giraffes").show();
    }
  });
});
