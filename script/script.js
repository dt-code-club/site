const terminal = document.getElementById("terminal")
const transmissionText = document.getElementById("transmission").innerText
const dtccHelpText = document.getElementById("dtcc-help").innerText
const osHelpText = document.getElementById("os-help").innerText
const helpText = document.getElementById("help").innerText
const loaderContainer = document.querySelector(".os-loader-container")
const loaderBar = document.querySelector(".loader-bar")
const loaderText = document.querySelector(".loader-text")
const caret = "▍"
const ignoreKeys = [
    'Shift', 'Control', 'Alt', 'Meta',
    /*'ArrowUp', 'ArrowDown',*/ 'ArrowLeft', 'ArrowRight',
    'Tab', 'Escape',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];
const dev = false;
var inputBuffer = "";
var commandHistory = [];
var commandIndex = 0;
var loadingProgress = 0;
var targetLoadingProgress = 0;
var loadSpeed = 0.03;
var username = "visitor"
function roundTo2(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100
}
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
            } else if (key == "ArrowUp") {
                if (commandIndex > 0) {
                    commandIndex--;
                    let newCommand = commandHistory[commandIndex]
                    inputBuffer = newCommand
                    terminal.innerText = startText + inputBuffer + caret
                }
            } else if (key == "ArrowDown") {
                if (commandIndex < commandHistory.length - 1) {
                    commandIndex++;
                    let newCommand = commandHistory[commandIndex]
                    inputBuffer = newCommand
                    terminal.innerText = startText + inputBuffer + caret
                }
            } else if (ignoreKeys.includes(key)) {

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
async function loadOS() {
    loaderText.innerHTML = "Creating lesson plans..."
    await sleepAsync(2000);
    targetLoadingProgress = 20;

    loaderText.innerHTML = "Making the PowerPoint slides..."
    await sleepAsync(2500);
    targetLoadingProgress = 30;

    loaderText.innerHTML = "Sleeping past 2 AM..."
    await sleepAsync(2000);
    targetLoadingProgress = 60;

    loaderText.innerHTML = "Merging Git conflicts..."
    await sleepAsync(1500);
    targetLoadingProgress = 80;

    loaderText.innerHTML = "Finishing up..."
    await sleepAsync(1800);
    targetLoadingProgress = 100;

    loaderText.innerHTML = "And we're done!"
    await sleepAsync(2000);
    location.href = "/os/"
}
async function init() {
    canUserType = false;
    await typeLine(`Incoming transmission - ${transmissionText.length} bytes`, dev ? 0 : 20)
    await sleepAsync(dev ? 0 : 200)
    await typeLine("Begin transmission...", dev ? 0 : 20)
    await typeLine("---------------------------------------------------------------------------", dev ? 0 : 10)
    await sleepAsync(dev ? 0 : 200)
    for (const line of transmissionText.split("\n")) {
        await typeLine(line, dev ? 0 : 15);
    };
    await sleepAsync(dev ? 0 : 200)
    await typeLine("---------------------------------------------------------------------------", dev ? 0 : 10)
    await typeLine("End transmission.\n", dev ? 0 : 20)
    await sleepAsync(dev ? 0 : 200)
    canUserType = true;
    while (true) {
        let result = await input(`${username}@codeclub.local:~$ `)
        result = result.toLowerCase().split(" ")
        let command = result[0]
        let arguments = result.slice(1)
        commandHistory.push(result.join(" "))
        if (command == "dtcc") {
            if (arguments[0] == "help" || arguments[0] == "-h") {
                for (const line of dtccHelpText.split("\n")) {
                    await typeLine(line, dev ? 0 : 2);
                };
            } else {
                await typeLine("Error: unrecognized or incomplete command line.\n", 2)
                for (const line of dtccHelpText.split("\n")) {
                    await typeLine(line, dev ? 0 : 2);
                };
            }
        } else if (command == "os") {
            if (arguments[0] == "activate" || arguments[0] == "-a") {
                await typeLine("Activating operating system GUI...", dev ? 0 : 10);
                await sleepAsync(dev ? 0 : 750);
                loaderContainer.style.display = "initial"
                await loadOS();
            } else if (arguments[0] == "help" || arguments[0] == "-h") {
                for (const line of osHelpText.split("\n")) {
                    await typeLine(line, dev ? 0 : 2);
                };
            } else {
                await typeLine("Error: unrecognized or incomplete command line.\n", 2)
                for (const line of osHelpText.split("\n")) {
                    await typeLine(line, dev ? 0 : 2);
                };
            }
        } else if (command == "help") {
            for (const line of helpText.split("\n")) {
                await typeLine(line, dev ? 0 : 2);
            };
        } else if (command == "su") {
            if (arguments.length > 0) {
                username = arguments[0]
            } else {
                await typeLine("Error: unrecognized or incomplete command line.\n", 2)
            }
        } else if (command == "whoami") {
            if (arguments.length > 0) {
                await typeLine(username, 2)
            } else {
                await typeLine("Error: unrecognized or incomplete command line.\n", 2)
            }
        } else if (command == "echo") {
            await typeLine(arguments.join(" "))
        } else {
            await typeLine(`"${command}" is not recognized as an internal or external command.\n`, 2);
        }
        terminal.scrollTop = terminal.scrollHeight
        commandIndex++;
    }
}
function recalculateLoadingProgress() {
    loadingProgress = loadingProgress + (targetLoadingProgress - loadingProgress) * loadSpeed;
    loaderBar.style.width = roundTo2(loadingProgress) + "%"
}
init()
setInterval(recalculateLoadingProgress, 10)