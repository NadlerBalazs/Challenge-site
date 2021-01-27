window.onload = function(){
        var iframe = document.getElementById("return");
        var html = "";
           

        iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(html);
            iframe.contentWindow.document.close(); 
             document.getElementById("return").style.visibility = "visible";
        }
        
        let htmlEditor = ace.edit("html-editor");
        htmlEditor.setTheme("ace/theme/monokai");
        htmlEditor.getSession().setMode("ace/mode/html");
        htmlEditor.setFontSize(15); 
        
        let cssEditor = ace.edit("css-editor");
        cssEditor.setTheme("ace/theme/monokai");
        cssEditor.getSession().setMode("ace/mode/css");
        cssEditor.setFontSize(15);
        
      /*  let jsEditor = ace.edit("js-editor");
        jsEditor.setTheme("ace/theme/monokai");
        jsEditor.getSession().setMode("ace/mode/javascript");
        jsEditor.setFontSize(15);*/
        
        function showPreview(){
        var htmlCode = htmlEditor.getValue();
        var cssCode = "<style>" + cssEditor.getValue()+ "</style>";
        var frame = document.getElementById("return").contentDocument;
        frame.open();
        frame.write(htmlCode +cssCode);
        frame.close();
        }