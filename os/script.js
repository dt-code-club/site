const taskbarTimeElem = document.getElementById("taskbar-time")
const taskbarDateElem = document.getElementById("taskbar-date")
function pad2(string){
    return String(string).padStart(2, '0')
}
function timeHandler(){
    let today = new Date();

    // Getting time
    let hours = today.getHours()
    let meridiem = "AM"
    if(hours > 12){
        hours -= 12
        meridiem = "PM"
    }
    hours = pad2(hours)
    let minutes = today.getMinutes()
    let timeString = `${hours}:${minutes} ${meridiem}`
    taskbarTimeElem.innerText = timeString

    // Getting date
    year = String(today.getFullYear())//.slice(2)
    month = pad2(today.getMonth() + 1)
    day = pad2(today.getDate())
    let dateString = `${month}/${day}/${year}`
    taskbarDateElem.innerText = dateString
}
setInterval(timeHandler(),30000)