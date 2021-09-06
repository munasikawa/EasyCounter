// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);

// for each can run and loop over our NodeList from our querySelectorAll
// in a for each, we pass in a callback function
// this function is called against each and every item in our list (btns)
btns.forEach(function (btn) {
  // listening for a click event,
  // then a callback function which is our event object (e)
  btn.addEventListener("click", function (e) {
    // On our callback action (e) we are accessing the event
    // event object has a property of currentTarget which accesses the classList
    // we assign the currentTarget from our classList to a variable called styles
    const styles = e.currentTarget.classList;

    // if the variable styles contains.. do this..
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // if count is less or greater or equal to, set the color to this...
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    if (count < 0) {
      value.style.color = "red";
    }

    // update count based on if statements
    value.textContent = count;
  });
});
