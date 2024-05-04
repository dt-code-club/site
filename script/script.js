const terminal = document.getElementById("terminal")
const transmissionText = document.getElementById("transmission").innerText
const helpText = document.getElementById("help").innerText
const loaderContainer = document.querySelector(".os-loader-container")
const caret = "▍"
var inputBuffer = "";
var commandHistory = [];
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
async function input(prompt) {
    return new Promise((resolve, reject) => {
        inputBuffer = ""
        terminal.innerText += prompt
        let startText = terminal.innerText
        terminal.innerText = startText + caret
        document.addEventListener('keydown', onKeyHandler);
        function onKeyHandler(e) {
            let key = e.key
            if (key == "Enter") {
                document.removeEventListener('keydown', onKeyHandler);
                terminal.innerText = startText + inputBuffer
                terminal.innerText += "\n"
                resolve(inputBuffer);
            } else if (key == "Backspace") {
                inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1);
                terminal.innerText = startText + inputBuffer + caret
            } else if (key == "Shift" || key == "Alt" || key == "Control" || key == "Meta") {

            }
            else {
                inputBuffer += key
                terminal.innerText = startText + inputBuffer + caret
            }
        }
    })
}
async function sleepAsync(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, time)
    })
}
async function init() {
    canUserType = false;
    await typeLine(`Incoming transmission - ${transmissionText.length} bytes`, 10)
    //await sleepAsync(200)
    await typeLine("Begin transmission...", 10)
    await typeLine("---------------------------------------------------------------------------", 10)
    //await sleepAsync(200)
    for (const line of transmissionText.split("\n")) {
        await typeLine(line, /*15*/0);
    };
    await typeLine("---------------------------------------------------------------------------", 10)
    //await sleepAsync(200)
    await typeLine("End transmission.\n", 10)
    canUserType = true;
    while (true) {
        let result = await input("visitor@codeclub.local:~$ ")
        result = result.split(" ")
        let command = result[0]
        let arguments = result.slice(1)
        commandHistory.push(result.join(" "))
        if (command == "dtcc") {
            if (arguments[0] == "help") {
                for (const line of helpText.split("\n")) {
                    await typeLine(line, 2);
                };
            } else {
                await typeLine("Error: unrecognized or incomplete command line.\n", 3)
                for (const line of helpText.split("\n")) {
                    await typeLine(line, 2);
                };
            }
        } else if (command == "os") {
            if (arguments[0] == "activate") {
                await typeLine("Activating operating system GUI...", 10);
                await sleepAsync(500);
                loaderContainer.style.display = "initial"
            } else {
                await typeLine("Error: unrecognized or incomplete command line.\n", 3)
                for (const line of helpText.split("\n")) {
                    await typeLine(line, 2);
                };
            }
        } else {
            await typeLine(`"${command}" is not recognized as an internal or external command.\n`, 3);
        }
        console.log(commandHistory)
    }
}
init()