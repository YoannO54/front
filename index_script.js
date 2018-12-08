function calculateScore() {

  var n = Math.random();
  var percentage = n * 100;
  var LovingResult = Math.floor(percentage);

  document.getElementById("display-result").innerHTML = "There is your score : " + LovingResult + " % of love !";
}
