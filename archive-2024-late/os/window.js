const windowHTML = `
        <div class="window-bar">
            <img class="window-icon" id="window-icon" draggable="false"
                src="https://assets.hackclub.com/icon-rounded.svg">
                <span class="window-title" id="window-title">TITLE</span>
                <div class="window-bar-action-buttons">
                    <span class="action-button" style="background-color: #46dd67;" onclick="maximizeWindow(this.parentElement.parentElement.parentElement)"></span>
                    <span class="action-button" style="background-color: #eedc39;" onclick="minimizeWindow(this.parentElement.parentElement.parentElement)"></span>
                    <span class="action-button" id="close-button" style="background-color: #FF5050;"
                        onclick="closeWindowFromActionButton(this)"></span>
                </div>
                <div class="window-bar-icon-actions" id="icon-actions" style="display: none;">
                    <div class="window-bar-action">
                        <img src="https://www.svgrepo.com/show/357194/resize-diagonal.svg">
                            <span>Size</span>
                    </div>
                    <div class="window-bar-action" onclick="minimizeWindow(this.parentElement.parentElement)">
                        <img src="https://www.svgrepo.com/show/342913/window-minimize.svg">
                            <span>Minimize</span>
                    </div>
                    <div class="window-bar-action" onclick="maximizeWindow(this.parentElement.parentElement)">
                        <img src="https://www.svgrepo.com/show/446722/maximize.svg">
                            <span>Maximize</span>
                    </div>
                    <div class="window-bar-action">
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
}