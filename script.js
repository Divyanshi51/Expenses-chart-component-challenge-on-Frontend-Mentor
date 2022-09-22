let Days = document.querySelectorAll(".days");

let bars = document.querySelectorAll('.bar');

fetch("data.json").then((data) =>
  data.json()
).then((res) => {
  let Day = new Date();
  let currentDay = Day.getDay();
  for (var i = 0; i < res.length; i++) {
    Days[i].style.height = `${res[i].amount / 10}rem`
    if (i + 1 == currentDay) {
      Days[i].style.backgroundColor = " hsl(186, 34%, 60%)"
    }
    bars[i].childNodes[1].innerText = `$${res[i].amount}`;
  }
});

for (let i = 0; i <= bars.length; i++) {
  bars[i].childNodes[1].style.display = "none";

  bars[i].addEventListener('mouseover', function (e) {
    bars[i].childNodes[1].style.display = "block";
    Days[i].style.opacity = " 0.6";
  })

  bars[i].addEventListener('mouseout', function (e) {
    bars[i].childNodes[1].style.display = "none";
    Days[i].style.opacity = " 1";
  })
}
