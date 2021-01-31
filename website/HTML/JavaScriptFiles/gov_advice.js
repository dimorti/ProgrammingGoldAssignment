window.onload = function(){
    var yesbutton = document.getElementById("covid");
    var nobutton = document.getElementById("healthy");
    
    yesbutton.onclick = function(){
        var message = "You should immediately arrange a test!!";
        var div = document.getElementById("message");
        div.innerHTML = message;
        
        var a = document.createElement('a');
        var link = document.createTextNode("arrange a test");
        a.appendChild(link);
        a.title = "arrange a test";
        a.href = "https://www.nhsinform.scot/self-help-guides/self-help-guide-access-to-testing-for-coronavirus";
    
        document.getElementById("message").appendChild(a);
        var img = document.createElement('img'); 
        img.src = "./images/poster.png";
        document.getElementById("message").appendChild(img);
        
    }

    nobutton.onclick = function(){
        var message = "Then keep stay at home!";
        var div = document.getElementById("message");
        div.innerHTML = message;

        var a = document.createElement('a');
        document.getElementById("message").appendChild(a);
        var img = document.createElement('img'); 
        img.src = "./images/covid-stay-home.jpg";
        document.getElementById("message").appendChild(img);
    }
    
}