
    var helpButton = document.getElementById("help");
    var okayButton = document.getElementById("fine");
    
    helpButton.onclick = function(){
        var message = "Remember you are not alone, click to get  ";
        var div = document.getElementById("message");
        div.innerHTML = message;
        
        var a = document.createElement('a');
        var link = document.createTextNode("live support");
        a.appendChild(link);
        a.title = "live support";
        a.href = "https://www.nhsinform.scot/illnesses-and-conditions/infections-and-poisoning/coronavirus-covid-19/your-mental-wellbeing/coronavirus-covid-19-your-mental-wellbeing#finding-support";
    
        document.getElementById("message").appendChild(a);
        var image = document.getElementById("dog");
        image.src = "./images/ESdog.jpg";
        
            
        
    }

    okayButton.onclick = function(){
        var message = "You are doing well!!!";
        var div = document.getElementById("message");
        div.innerHTML = message;

    }
    
