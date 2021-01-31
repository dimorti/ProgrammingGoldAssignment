window.onload = function(){


    var cases = document.getElementById("cases");
    var deaths = document.getElementById("deaths")

    cases.onclick = function(){
        var name =" Positive cases in January"
        var p = document.getElementById("name");     
        p.innerHTML = name;
        var javascriptFile = addJs("./JavaScriptFiles/CasesOfJanuary.js");
        var div = document.getElementById("my_dataviz");
        div.innerHTML = name;
        div.innerHTML = javascriptFile;


    }
    deaths.onclick = function(){
        var name =" Deaths in January"
        var p = document.getElementById("name");     
        p.innerHTML = name;
        var javascriptFile = addJs("./JavaScriptFiles/DeathsOfJanuary.js");
        var div = document.getElementById("my_dataviz");
        div.innerHTML = javascriptFile;
    }


    function addJs(jsFilePath) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = jsFilePath;
    
        document.getElementById("my_dataviz").appendChild(js);
    }
    
    

}