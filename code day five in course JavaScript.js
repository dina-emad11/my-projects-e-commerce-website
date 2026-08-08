var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var userName = urlParams.get('username');
if (userName) {
    document.getElementById("welcomeMessage").innerHTML = "<h1><b>welcome " + userName + "</b></h1>";
}
var advWindow;
function openAd() {
    setTimeout(function() {
    
        advWindow = window.open("", "_blank", "width=400,height=300");
        
        if (advWindow) {
            advWindow.document.write("<h3>Advertisement Window</h3><p id='adText'></p>");
            
            var text = "This is a long advertising paragraph that appears gradually character by character to showcase product details.";
            var index = 0;
            function typeWriter() {
                if (index < text.length) {
                    advWindow.document.getElementById("adText").innerHTML += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 50);
                }
            }
            
            typeWriter();
        }
    }, 3000);
}
function closeAd() {
    if (advWindow) {
        advWindow.close();
    }
}
function goToFacebook() {
    location.href = "https://www.facebook.com";
}
function goToPinterest() {
    location.replace("https://www.Pinterest.com");
}
window.onload = function() {
    setTimeout(function() {
        alert("Welcome to our website!");
    }, 3000);
};
