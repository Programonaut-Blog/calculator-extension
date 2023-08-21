const math = require('mathjs');

const input = document.getElementById('input');
const output = document.getElementById('output');
const form = document.getElementById('form');

form.onsubmit = (e) => {
  e.preventDefault();
  calculate();
};

input.onclick = function () {
  this.select();
};

function calculate() {
  const res = math.evaluate(input.value);
  output.innerHTML = res;

  chrome.storage.local.set({ equation: input.value, result: res }).then(() => {
    console.log("Value is set to " + res);
  })
}

(function (){
  console.log("Hello");
  chrome.storage.local.get(["result","equation"]).then((result) => {
    const eq = result["equation"];
    const res = result["result"];

    input.value = eq ? eq : '';
    output.innerHTML = res ? res : 'Result';
  });
})()