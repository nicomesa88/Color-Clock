
var startClock = function() {
    var today = new Date()
    var h = today.getHours()
    var hours = h.toString(16)
    var m = today.getMinutes()
    var minutes = m.toString(16)
    var s = today.getSeconds()
    var seconds = s.toString(16)
    m = timeCheck(m)
    s = timeCheck(s)
    document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s
    setTimeout(startClock, 1000)
    var overlay = document.querySelector("#overlay")
    var backgroundHex = '#' + hours + minutes + seconds
    overlay.style.background = backgroundHex
    var hexContainer = document.querySelector("#hexNumb")
    hexContainer.innerHTML = backgroundHex
    console.log(hexNumb)
}

var timeCheck = function(i) {
    if (i < 10) {
    i = "0" + i
    }
    return i
}

var line = document.querySelector("#line")
    width = 0

var timer = setInterval(function() {
  line.style.width = ( width += 5 ) + "px"
  if ( width === 500 ) {
    width = 0
  }
}, 1000)