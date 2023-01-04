let timer
let sec = 0
let min = 0
let hour = 0

let start_btn = document.getElementById('start')
let stop_btn = document.getElementById('stop')
let reset_btn = document.getElementById('reset')
let timer_element = document.getElementById('timer')

reset_btn.disabled = true

start_btn.addEventListener('click', function () {
  timer = setInterval(timerHandler, 1000)
  start_btn.disabled = true
  stop_btn.disabled = false
  reset_btn.disabled = false
})

stop_btn.disabled = true

stop_btn.addEventListener('click', function () {
  timer = clearInterval(timer)
  start_btn.disabled = false
  stop_btn.disabled = true
})

reset_btn.addEventListener('click', function () {
  timer = clearInterval(timer)
  reset_btn.disabled = true
  start_btn.disabled = false
  sec = 0
  min = 0
  hour = 0
  timer_element.innerHTML = '00:00:00'
})

function timerHandler() {
  sec++
  if (sec == 60) {
    sec = 0
    min++
  }
  if (min == 60) {
    min = 0
    hour++
  }
  DisplayTime()
}

function DisplayTime() {
  let sec_pretty = sec
  let min_pretty = min
  let hour_pretty = hour

  if (sec < 10) {
    sec_pretty = '0' + sec
  }

  if (min < 10) {
    min_pretty = '0' + min
  }

  if (hour < 10) {
    hour_pretty = '0' + hour
  }

  timer_element.innerHTML = hour_pretty + ':' + min_pretty + ':' + sec_pretty
}
