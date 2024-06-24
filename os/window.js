const windowHTML = `
    <div class="window">
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
        <iframe src="https://dtcode.club"></iframe>
    </div>`
class OSWindow {
    constructor(title = "Test", dimensions = [500, 500], maximized = false) {
        this.windowPosition = []
        this.isIconActionsOpen = false
        this.isWindowMaximized = maximized
        this.canGrabWindow = true


        this.windowElement = document.createElement("div")
        this.windowElement.innerHTML = windowHTML
        this.windowElement.style.width = dimensions[0] + "px"
        this.windowElement.style.height = dimensions[1] + "px"
        this.windowElement = document.body.appendChild(this.windowElement)

        this.iconActions = this.windowElement.querySelector("#icon-actions")
        this.windowIcon = this.windowElement.querySelector("#window-icon")
        this.windowTitle = this.windowElement.querySelector("#window-title")

        this.windowTitle.innerText = title
    }
}