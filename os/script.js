const taskbarTimeElem = document.getElementById("taskbar-time")
const taskbarDateElem = document.getElementById("taskbar-date")
function pad2(string) {
    return String(string).padStart(2, '0')
}
function timeHandler() {
    let today = new Date();

    // Getting time
    let hours = today.getHours()
    let meridiem = "AM"
    if (hours > 12) {
        hours -= 12
        meridiem = "PM"
    }
    hours = pad2(hours)
    let minutes = pad2(today.getMinutes())
    let timeString = `${hours}:${minutes} ${meridiem}`
    taskbarTimeElem.innerText = timeString

    // Getting date
    year = String(today.getFullYear())//.slice(2)
    month = pad2(today.getMonth() + 1)
    day = pad2(today.getDate())
    let dateString = `${month}/${day}/${year}`
    taskbarDateElem.innerText = dateString
}
setInterval(timeHandler(), 2000)

var currentWindow
var currentlyGrabbing = false
var windowGrabOffset = []
var mousePosition
var isIconActionsOpen = false
const iconActions = document.getElementById("icon-actions")
const windowIcon = document.getElementById("window-icon")
var isWindowMaximized
var lastcurrentWindow
var currentSensor
var mouseDownStart = []

function windowGrabHandler(target, mouseInfo) {
    if (!isWindowMaximized) {
        currentlyGrabbing = true
        currentWindow = target
        lastcurrentWindow = currentWindow
        let windowBoundingBox = currentWindow.getBoundingClientRect()
        let windowPosition = [windowBoundingBox.x, windowBoundingBox.y]
        mousePosition = [mouseInfo.clientX, mouseInfo.clientY]
        windowGrabOffset = [mousePosition[0] - windowPosition[0], mousePosition[1] - windowPosition[1]]
    }
}
function windowMoveHandler(mouseInfo) {
    if (currentlyGrabbing) {
        mousePosition = [mouseInfo.clientX, mouseInfo.clientY]
        windowPosition = [mousePosition[0] - windowGrabOffset[0], mousePosition[1] - windowGrabOffset[1]]
        currentWindow.style.left = windowPosition[0] + "px"
        currentWindow.style.top = windowPosition[1] + "px"
    }
}

function closeWindowFromActionButton(button) {
    let window = button.parentElement.parentElement.parentElement
    window.style.display = "none"
}
function minimizeWindow(target) {
    target.classList.remove("maximized")
    target.style.left = windowPosition[0] + "px"
    target.style.top = windowPosition[1] + "px"
}
function maximizeWindow(target) {
    target.style = ""
    target.classList.add("maximized")
}
document.addEventListener("mousedown", (e) => {
    if (e.target.parentElement.className == "window-bar") {
        windowGrabHandler(e.target.parentElement.parentElement, e)
    }
    if (e.target.classList.contains("sensor")) {
        mouseDownStart = [e.clientX, e.clientY]
        currentWindow = e.target.parentElement
    }
})

document.addEventListener("mouseup", () => {
    currentlyGrabbing = false;
    currentWindow = null;
})
document.addEventListener("mousemove", (e) => {
    windowMoveHandler(e)
})

function elementAttribute(element, key, value) {
    element.setAttribute(key, value)
    return value
}

function elementAttribute(element, key) {
    return element.getAttribute(key)
}
function createWindow(title = "Test", windowsource, icon = "./logo.png", position = [0, 0], dimensions = [500, 500], maximized = false) {
    isIconActionsOpen = false
    isWindowMaximized = maximized
    canGrabWindow = true


    let windowElement = document.createElement("div")
    windowElement.innerHTML = windowHTML
    windowElement.className = "window"

    let windowSize = dimensions

    windowElement.style.width = windowSize[0] + "px"
    windowElement.style.height = windowSize[1] + "px"

    windowElement.style.left = position[0] + "px"
    windowElement.style.top = position[1] + "px"

    let windowPosition = position

    windowElement = document.body.appendChild(windowElement)

    let frame = windowElement.querySelector("iframe")
    frame.src = windowsource
    let iconActions = windowElement.querySelector("#icon-actions")
    let windowIcon = windowElement.querySelector("#window-icon")
    windowIcon.src = icon
    windowTitle = windowElement.querySelector("#window-title")

    windowTitle.innerText = title

    windowIcon.addEventListener("click", (e) => {
        isIconActionsOpen = true
        iconActions.style.display = ""
    })

    sensorClickStart = []
    document.addEventListener("mousedown", (e) => {
        if (isIconActionsOpen && e.target.parentElement.className != "window-bar-action" && e.target.parentElement.className != "window-bar-icon-actions" && e.target.className != "window-icon") {
            iconActions.style.display = "none"
        }
    })
    windowElement.querySelector("#close-button").addEventListener("click", (e) => {
        windowElement.remove();
    })
    let directions = ["u", "d", "r", "l", "ur", "ul", "dr", "dl"];
    directions.forEach(element => {
        console.log(element)
        let directionSensor = windowElement.querySelector(`#${element}`)
        directionSensor.addEventListener("mousedown", (e) => {
            sensorClickStart = [e.clientX, e.clientY]
            resizeUp = directionSensor.id.includes("u")
            resizeDown = directionSensor.id.includes("d")
            resizeRight = directionSensor.id.includes("r")
            resizeLeft = directionSensor.id.includes("l")
        })
    })
}

createWindow('DuckDuckGo', '/os/browser', './placeholder-icons/duckduckgo.svg', position = [123, 123])