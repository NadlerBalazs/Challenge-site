$(document).ready(function () {
    console.log("KKKKKKKKKKKKKKK");
  $("#check").click(function () {  
      console.log("SSSSSSSSSS");
    let h1 =  $("#return").contents().find("h1");
    if ($("#return").contents().find("h1").length > 0){
        $("#first").removeClass("fa-times");
        $("#first").addClass("fa-check");       
    }else{
        $("#first").removeClass("fa-check");
        $("#first").addClass("fa-times");   
    } 
      
    if (h1.text()=="Egyre"){
        $("#seventh").removeClass("fa-times");
        $("#seventh").addClass("fa-check");          
    }else{
        $("#seventh").removeClass("fa-check");
        $("#seventh").addClass("fa-times");           
    }
      
    let h2 =  $("#return").contents().find("h2");
    if ($("#return").contents().find("h1").length > 0){
        $("#second").removeClass("fa-times");
        $("#second").addClass("fa-check");       
    }else{
        $("#second").removeClass("fa-check");
        $("#second").addClass("fa-times");   
    } 

    if (h2.text()=="kisebb"){
        $("#eighth").removeClass("fa-times");
        $("#eighth").addClass("fa-check");          
    }else{
        $("#eighth").removeClass("fa-check");
        $("#eighth").addClass("fa-times");           
    }
      
      
    let h3 =  $("#return").contents().find("h3");
    if ($("#return").contents().find("h1").length > 0){
        $("#third").removeClass("fa-times");
        $("#third").addClass("fa-check");       
    }else{
        $("#third").removeClass("fa-check");
        $("#third").addClass("fa-times");   
    } 
      
    if (h2.text()=="kisebb"){
        $("#eighth").removeClass("fa-times");
        $("#eighth").addClass("fa-check");          
    }else{
        $("#eighth").removeClass("fa-check");
        $("#eighth").addClass("fa-times");           
    }      
      
    let h4 =  $("#return").contents().find("h4");
    if ($("#return").contents().find("h1").length > 0){
        $("#fourth").removeClass("fa-times");
        $("#fourth").addClass("fa-check");       
    }else{
        $("#fourth").removeClass("fa-check");
        $("#fourth").addClass("fa-times");   
    } 
      
    if (h2.text()=="kisebb"){
        $("#eighth").removeClass("fa-times");
        $("#eighth").addClass("fa-check");          
    }else{
        $("#eighth").removeClass("fa-check");
        $("#eighth").addClass("fa-times");           
    }      
      
    let h5 =  $("#return").contents().find("h5");
    if ($("#fifth").contents().find("h5").length > 0){
        $("#fifth").removeClass("fa-times");
        $("#fifth").addClass("fa-check");       
    }else{
        $("#fifth").removeClass("fa-check");
        $("#fifth").addClass("fa-times");   
    } 
      
    if (h5.text()=="szöveg"){
        $("#eighth").removeClass("fa-times");
        $("#eighth").addClass("fa-check");          
    }else{
        $("#eighth").removeClass("fa-check");
        $("#eighth").addClass("fa-times");           
    }      
      
    let h6 =  $("#return").contents().find("h6");
    if ($("#sixth").contents().find("h6").length > 0){
        $("#sixth").removeClass("fa-times");
        $("#sixth").addClass("fa-check");       
    }else{
        $("#sixth").removeClass("fa-check");
        $("#sixth").addClass("fa-times");   
    } 
      
    if (h6.text()=="mérete"){
        $("#twelfth").removeClass("fa-times");
        $("#twelfth").addClass("fa-check");          
    }else{
        $("#twelfth").removeClass("fa-check");
        $("#twelfth").addClass("fa-times");           
    }      
      
  });
});