const boxOne = document.querySelector("#box-one");
const boxTwo = document.querySelector("#box-two");
const boxThree = document.querySelector("#box-three");

boxOne.addEventListener("click", function (e) {
  console.log("Box One (purple) has been clicked!");
});

// added e.stopPropagation() to prevent bubbling when clicked

boxTwo.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Box Two (blue) has been clicked!");
});

boxThree.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Box Three (green) has been clicked!");
});