const terminal = document.getElementById("terminal")
const transmissionText = document.getElementById("transmission").innerText
async function typeLine(line, typeSpeed = 35, end = "\n") {
    return new Promise((resolve, reject) => {
        line += end
        let count = 0
        for (let i = 0; i < line.length; i++) {
            setTimeout(() => {
                const letter = line[i];
                terminal.innerText += letter
            }, i * typeSpeed)
        }
        setTimeout(() => { resolve() }, typeSpeed * line.length)
    })
}
async function sleepAsync(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, time)
    })
}
function typeKey(e) {
    if (canUserType) {
        let key = e.key
        if (key == "Enter") {
            runCommand(inputBuffer)
        } else if (key == "Backspace") {
            inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1);
        }
        else if (key == "Shift" || key == "Alt" || key == "Control" || key == "Meta") {

        }
        else {
            inputBuffer += key
        }
        updateText(true)
    }
}

async function init() {
    await typeLine(`Incoming transmission - ${transmissionText.length} bytes`, 10)
    await sleepAsync(200)
    await typeLine("Begin transmission...", 10)
    await typeLine("---------------------------------------------------------------------------", 10)
    await sleepAsync(200)
    for (const line of transmissionText.split("\n")) {
        await typeLine(line, 20);
    };
    await typeLine("---------------------------------------------------------------------------", 10)
    await typeLine("End transmission.\n", 10)
    await typeLine("visitor@codeclub.local:~$ ", typeSpeed = 0, end = "▍")
}
init()