var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler()
{
    console.log("Error Occured!", error)
    alert("Something wrong with the server")
};

function clickHandler() {
    var InputText = txtInput.value;

    fetch(getTranslationURL(InputText))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;})
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);