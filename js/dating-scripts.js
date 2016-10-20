$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inchesInput = parseInt($("#height").val());
    var hairInput = $("input:radio[name=hair]:checked").val();
    var ageInput = $("#age").val();
    console.log(hairInput);
    if (inchesInput >= 72 && hairInput === "blonde" ){
      //$(".remove").hide();
      $("#charlize").hide();
    }


  });
});
