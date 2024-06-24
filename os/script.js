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

var heldWindow
var currentlyGrabbing = false
var windowGrabOffset = []
var mousePosition
var isIconActionsOpen = false
const iconActions = document.getElementById("icon-actions")
const windowIcon = document.getElementById("window-icon")
var isWindowMaximized
var lastHeldWindow
function windowGrabHandler(target, mouseInfo) {
    if (!isWindowMaximized) {
        currentlyGrabbing = true
        heldWindow = target
        lastHeldWindow = heldWindow
        let windowBoundingBox = heldWindow.getBoundingClientRect()
        let windowPosition = [windowBoundingBox.x, windowBoundingBox.y]
        mousePosition = [mouseInfo.clientX, mouseInfo.clientY]
        windowGrabOffset = [mousePosition[0] - windowPosition[0], mousePosition[1] - windowPosition[1]]
    }
}
function windowMoveHandler(mouseInfo) {
    if (currentlyGrabbing) {
        mousePosition = [mouseInfo.clientX, mouseInfo.clientY]
        windowPosition = [mousePosition[0] - windowGrabOffset[0], mousePosition[1] - windowGrabOffset[1]]
        heldWindow.style.left = windowPosition[0] + "px"
        heldWindow.style.top = windowPosition[1] + "px"
    }
}
function closeWindowFromActionButton(button) {
    let window = button.parentElement.parentElement.parentElement
    window.style.display = "none"
}
function maximizeWindow() {
    lastHeldWindow.style = ""
    lastHeldWindow.classList.add("maximized")
}
function minimizeWindow() {
    lastHeldWindow.classList.remove("maximized")
    lastHeldWindow.style.left = windowPosition[0] + "px"
    lastHeldWindow.style.top = windowPosition[1] + "px"
}
document.addEventListener("mousedown", (e) => {
    if (e.target.parentElement.className == "window-bar") {
        windowGrabHandler(e.target.parentElement.parentElement, e)
    }
})

document.addEventListener("mouseup", () => {
    currentlyGrabbing = false;
    heldWindow = null;
})
document.addEventListener("mousemove", (e) => { windowMoveHandler(e) })