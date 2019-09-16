/* based on https://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm */
const ms = 3000;
let timer;
setup();

function setup() {
  const events = ['mousemove', 'mousedown', 'keypress', 'touchmove']; // 'MSPointerMove''DOMMouseScroll', 'mousewheel'
  events.forEach(event => {
    this.addEventListener(event, resetTimer, false);
  });

  startTimer();
}

function startTimer() {
  timer = window.setTimeout(goInactive, ms);
}

function resetTimer(e) {
  window.clearTimeout(timer);

  goActive();
}

function goInactive() {
  document.body.classList.add('inactive');
}

function goActive() {
  document.body.classList.remove('inactive');

  startTimer();
}
