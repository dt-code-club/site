const windowHTML = `
        <div class="window-bar">
            <img class="window-icon" id="window-icon" draggable="false"
                src="https://assets.hackclub.com/icon-rounded.svg">
                <span class="window-title" id="window-title">TITLE</span>
                <div class="window-bar-action-buttons">
                    <span class="action-button" style="background-color: #46dd67;" onclick="maximizeWindow()"></span>
                    <span class="action-button" style="background-color: #eedc39;" onclick="minimizeWindow()"></span>
                    <span class="action-button" style="background-color: #FF5050;"
                        onclick="closeWindowFromActionButton(this)"></span>
                </div>
                <div class="window-bar-icon-actions" id="icon-actions" style="display: none;">
                    <div class="window-bar-action">
                        <img src="https://www.svgrepo.com/show/357194/resize-diagonal.svg">
                            <span>Size</span>
                    </div>
                    <div class="window-bar-action" onclick="minimizeWindow()">
                        <img src="https://www.svgrepo.com/show/342913/window-minimize.svg">
                            <span>Minimize</span>
                    </div>
                    <div class="window-bar-action" onclick="maximizeWindow()">
                        <img src="https://www.svgrepo.com/show/446722/maximize.svg">
                            <span>Maximize</span>
                    </div>
                    <div class="window-bar-action" onclick="closeWindowFromActionButton(this)">
                        <img src="./close.svg">
                            <span>Close</span>
                    </div>
                </div>
        </div>
        <div class="up sensor" id="u"></div>
        <div class="down sensor" id="d"></div>
        <div class="right sensor" id="r"></div>
        <div class="left sensor" id="l"></div>
        <div class="ur sensor" id="ur"></div>
        <div class="ul sensor" id="ul"></div>
        <div class="dr sensor" id="dr"></div>
        <div class="dl sensor" id="dl"></div>
        <iframe src="https://dtcode.club"></iframe>`
class OSWindow {
    resizeHandler(e) {
        let resizeOffset = [e.clientX - this.sensorClickStart[0], e.clientY - this.sensorClickStart[1]]
        console.log(this.resizeUp, this.resizeRight, this.resizeDown, this.resizeLeft)
        console.log(resizeOffset)
        if (this.resizeRight) {
            let newWidth = (this.windowSize[0] + resizeOffset[0]) + "px"
            this.windowElement.style.width = newWidth
        } else if (this.resizeLeft) {
            let newLeft = (this.windowPosition[0] + resizeOffset[0]) + "px"
            let newWidth = (this.windowSize[0] - resizeOffset[0]) + "px"
            this.windowElement.style.left = newLeft
            this.windowElement.style.width = newWidth
        }
        if (this.resizeDown) {
            let newHeight = (this.windowSize[1] + resizeOffset[1]) + "px"
            this.windowElement.style.height = newHeight
        } else if (this.resizeUp) {
            let newTop = (this.windowPosition[1] + resizeOffset[1]) + "px"
            let newHeight = (this.windowSize[1] - resizeOffset[1]) + "px"
            this.windowElement.style.top = newTop
            this.windowElement.style.height = newHeight
        }
    }
    maximizeWindow() {
        this.windowElement.style = ""
        this.windowElement.classList.add("maximized")
    }
    minimizeWindow() {
        this.windowElement.classList.remove("maximized")
        this.windowElement.style.left = windowPosition[0] + "px"
        this.windowElement.style.top = windowPosition[1] + "px"
    }
    constructor(title = "Test", windowsource, icon = "./logo.png", position = [0, 0], dimensions = [500, 500], maximized = false) {
        this.windowPosition = []
        this.isIconActionsOpen = false
        this.isWindowMaximized = maximized
        this.canGrabWindow = true


        this.windowElement = document.createElement("div")
        this.windowElement.innerHTML = windowHTML
        this.windowElement.className = "window"

        this.windowSize = dimensions

        this.windowElement.style.width = this.windowSize[0] + "px"
        this.windowElement.style.height = this.windowSize[1] + "px"

        this.windowElement.style.left = position[0] + "px"
        this.windowElement.style.top = position[1] + "px"
        this.windowPosition = position

        this.windowElement = document.body.appendChild(this.windowElement)

        this.frame = this.windowElement.querySelector("iframe")
        this.frame.src = windowsource
        this.iconActions = this.windowElement.querySelector("#icon-actions")
        this.windowIcon = this.windowElement.querySelector("#window-icon")
        this.windowIcon.src = icon
        this.windowTitle = this.windowElement.querySelector("#window-title")

        this.windowTitle.innerText = title

        this.windowIcon.addEventListener("click", (e) => {
            this.isIconActionsOpen = true
            this.iconActions.style.display = ""
        })
        this.resizeUp = false;
        this.resizeDown = false;
        this.resizeRight = false;
        this.resizeLeft = false;

        this.sensorClickStart = []
        document.addEventListener("mousedown", (e) => {
            if (this.isIconActionsOpen && e.target.parentElement.className != "window-bar-action" && e.target.parentElement.className != "window-bar-icon-actions" && e.target.className != "window-icon") {
                this.iconActions.style.display = "none"
            }
        })
        document.addEventListener("mouseup", (e) => {
            this.resizeUp = false;
            this.resizeDown = false;
            this.resizeRight = false;
            this.resizeLeft = false;
            this.windowSize = [this.windowElement.style.width.slice(-2), this.windowElement.style.height.slice(-2)]
            this.windowPosition = [this.windowElement.style.left.slice(-2), this.windowElement.style.top.slice(-2)]
        })
        document.addEventListener("mousemove", (e) => {
            this.resizeHandler(e)
        })
        let directions = ["u", "d", "r", "l", "ur", "ul", "dr", "dl"];
        directions.forEach(element => {
            console.log(element)
            let directionSensor = this.windowElement.querySelector(`#${element}`)
            directionSensor.addEventListener("mousedown", (e) => {
                this.sensorClickStart = [e.clientX, e.clientY]
                this.resizeUp = directionSensor.id.includes("u")
                this.resizeDown = directionSensor.id.includes("d")
                this.resizeRight = directionSensor.id.includes("r")
                this.resizeLeft = directionSensor.id.includes("l")
            })
        })
    }
}