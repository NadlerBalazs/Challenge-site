$(document).ready(function () {
  $("#check").click(function () {  
    let h1 =  $("#return").contents().find("h1");
    if ($("#return").contents().find("h1").length > 0){
        $("#first").removeClass("fa-times");
        $("#first").addClass("fa-check");       
    }else{
        $("#first").removeClass("fa-check");
        $("#first").addClass("fa-times");   
    }  
    if ($("#return").contents().find("h1").length > 0){
                    
    alert($("h1").text());
    if (h1.text()=="Hello World!"){
        $("#second").removeClass("fa-times");
        $("#second").addClass("fa-check");          
    }else{
        $("#second").removeClass("fa-check");
        $("#second").addClass("fa-times");           
    }
    }
  });
});