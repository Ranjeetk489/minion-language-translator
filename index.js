var textInput = document.querySelector("textarea");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";
var translateButton  = document.querySelector("button");
var output = document.querySelector("#output");

translateButton.addEventListener('click', clickHandler);

function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input
 }

function clickHandler(){
    var result = textInput.value

    fetch(getTranslationUrl(result))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        output.style.display = "block";
        output.innerHTML = '<h1>' + translatedText +'</h1>';
    })
    .catch(errorHandler)
}


function errorHandler(error){
    console.log("Error Occured", error.message)
    alert("Something went wrong! please try again after sometime")
}