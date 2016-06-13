
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
    var overlay2 = document.querySelector("#overlay")
    var backgroundHex = '#' + hours * 4 + minutes * 4 + seconds * 4
    overlay2.style.background = backgroundHex
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
  line.style.width = ( width += 10 ) + "px"
  // at 350px, line shrinks back to 0
  if ( width === 500 ) {
    width = 0
    // clearInterval( timer )
  }
}, 1000)