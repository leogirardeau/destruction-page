let html = document.querySelector(".body");
let destructionCode = ["c", "o", "d", "e", "1", "2", "3", "4"];
console.log(destructionCode);
let destructionSequence = [];
let i = 0;

// Remove HTML

function removeHTML() {
  html.remove();
}

html.addEventListener("keydown", destruction);

function destruction(e) {
  if (i < destructionCode.length) {
    destructionSequence.push(e.key);
    console.log(destructionSequence);
    if (destructionSequence[i] === destructionCode[i]) {
      i++;
    } else {
      destructionSequence = [];
      i = 0;
    }
  }
  if (i === destructionCode.length) {
    window.clearTimeout(timer);
    html.remove();
  }
}

timer = setTimeout(function () {
  alert("PERDU");
}, 120000);

/* function destruction(e) {
  if (e.key == destructionCode[e]) {
    destructionSequence.push(e.key);
    console.log(destructionSequence);
    console.log(e);
  }
} */

// TIMER

var counter_list = [10, 10000, 10000];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
//var str_counter_2 = counter_list[2];
var display_str = "";
var display_div = document.getElementById("counter");

/* function incrementCount(current_count) {
  setInterval(function () {
    // clear count
    while (display_div.hasChildNodes()) {
      display_div.removeChild(display_div.lastChild);
    }
    str_counter_0++;
    if (str_counter_0 > 99) {
      str_counter_0 = 10; // reset count
      str_counter_1++; // increase next count
    }
    if (str_counter_1 > 99999) {
      str_counter_2++;
    }
    display_str =
      //str_counter_2.toString() +
      //str_counter_1.toString() +
      str_counter_0.toString();
    for (var i = 0; i < display_str.length; i++) {
      var new_span = document.createElement("span");
      new_span.className = "num_tiles";
      new_span.innerText = display_str[i];
      display_div.appendChild(new_span);
    }
  }, 1000);
}

incrementCount();
