$(document).ready(function () {
  $("#check").click(function(){
      console.log(("#return").contents().find("h1").length);
    if ($("#return").contents().find("h1").length > 0){
        $("#elso").removeClass("fa-times");
        $("#elso").addClass("fa-check");       
    }
            
    var element = $("#return").contents().find("h1");
    if (element.attr("id") == "first"){
        $("#masodik").removeClass("fa-times");
        $("#masodik").addClass("fa-check");          
    }
  });
});