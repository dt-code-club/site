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

new OSWindow('DuckDuckGo', '/os/browser', './placeholder-icons/duckduckgo.svg', position = [123, 123])