var text;
var currentTyped = "";
var textIndex = 0;
var mainText;
var textLength;
var typingInterval;
var canUserType = false;

function initText() {
    mainText = document.getElementById("terminal")
    console.log("helloooo")
    text = mainText.innerText;
    textLength = text.length
    currentTyped = ""
    typing()
}
function updateText(caret = false) {
    mainText.innerText = currentTyped + (caret ? "▍" : "")
}
function typing() {
    canUserType = false
    currentTyped += text[textIndex]
    textIndex++;
    if (textIndex + 1 == textLength) {
        canUserType = true
        updateText(true)
    } else {
        setTimeout(typing, 1)
        updateText()
    }
}
function typeKey(e) {
    if (canUserType) {
        let key = e.key
        if (key == "Enter") {
            currentTyped += "\n"
        } else if (key == "Backspace") {
            currentTyped = currentTyped.substring(0, currentTyped.length - 1);
        }
        else if (key == "Shift" || key == "Alt" || key == "Control" || key == "Meta") {

        }
        else {
            currentTyped += key
        }
        updateText(true)
    }
}

initText()
document.addEventListener("keydown", typeKey)