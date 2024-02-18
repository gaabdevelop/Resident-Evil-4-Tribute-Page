var backgroundClasses = [
  "yellow-background",
  "blue-background",
  "green-background",
  "red-background",
];
var currentIndex = 0;

function changeBackground() {
  var myDiv = document.getElementById("myDiv");

  myDiv.classList.remove(backgroundClasses[currentIndex]);

  currentIndex = (currentIndex + 1) % backgroundClasses.length;

  myDiv.classList.add(backgroundClasses[currentIndex]);
}

// mudança automática de plano de fundo a cada x segundos
setInterval(changeBackground, 4000);
