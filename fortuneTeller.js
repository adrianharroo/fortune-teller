// Declare variables
let form = document.getElementById("fortune-teller-form");

const output = document.getElementById("output");


// Functions
form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.style.display = "none";

  let mothersName = document.getElementById("mothers-name").value;
  let streetName = document.getElementById("street-name").value;
  let favColour = document.getElementById("fav-colour").value;
  let age = Number(document.getElementById("age").value);
  let num = Number(document.getElementById("num").value);

  output.innerHTML = `In ${num} years you are going to meet your best friend named ${mothersName} ${streetName}.

  You will get married in ${age + num} years and have ${age % num} children.
  
  In ${Math.round(age/num)} years you are going to dye your hair blue.`
});

console.log(17%2);
