const colors = [
  "rgb(250, 0, 0)",
  "rgb(0, 250, 0)",
  "rgb(0, 0, 250)",
  "rgb(125, 125, 0)",
  "rgb(0, 125, 125)",
  "rgb(250, 0, 125)",
] // randomized

const squares = document.querySelectorAll(".square");
const pickedColor = colors[3]; //randomize
const colorDisplay = document.getElementById("colorDisplay")
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //ad clcick listener to squares
  }

squares.forEach(function (square, index){
    square.style.backgroundColor = colors[index];
    square.addEventListener("click", function(){
      const clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        alert("correct");
      }
      else {
        alert("wrong");
      }
    });
  }
);
