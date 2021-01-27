'use strict';
$(document).ready(function () {
    $(".link").on('click', function() {
        localStorage.setItem("id", $(this).attr("id"));
        let editorType = localStorage.getItem("id");
        switch(editorType){
            case "1":
                window.location = "challenges/Frontend/HTMLindex.html";
                break;
        }
        
    });
});