// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushrooms">`
  document.querySelectorAll(".mushroom").forEach($shroom => {
    if (state.mushrooms) {
      $shroom.style.visibility = "visible";
    } else {
      $shroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach($gp => {
    if (state.greenPeppers) {
      $gp.style.visibility = "visible";
    } else {
      $gp.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let $whiteSauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    $whiteSauce.classList.add("sauce-white");
  } else {
    $whiteSauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let $gfCrust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    $gfCrust.classList.add("crust-gluten-free");
  } else {
    $gfCrust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let $pep = document.querySelector(".btn-pepperonni");
  let $mush = document.querySelector(".btn-mushrooms");
  let $gp = document.querySelector(".btn-green-peppers");
  let $sauce = document.querySelector(".btn-sauce");
  let $crust = document.querySelector(".btn-crust");

  if (state.pepperonni) {
    $pep.classList.add("active");
  } else {
    $pep.classList.remove("active");
  }

  if (state.mushrooms) {
    $mush.classList.add("active");
  } else {
    $mush.classList.remove("active");
  }

  if (state.greenPeppers) {
    $gp.classList.add("active");
  } else {
    $gp.classList.remove("active");
  }

  if (state.whiteSauce) {
    $sauce.classList.add("active");
  } else {
    $sauce.classList.remove("active");
  }

  if (state.glutenFreeCrust) {
    $crust.classList.add("active");
  } else {
    $crust.classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var list = document.getElementById("list");
  var totalPrice = document.getElementById("totalPrice");
  var addLi = document.createElement("li");
  var price = 10;

  list.innerHTML = "" ;

  if (state.pepperonni) {
    list.innerHTML += `<li>$1 pepperonni</li>`;
    price += ingredients.pepperonni.price;
  }

  if (state.mushrooms) {
    list.innerHTML += `<li>$1 mushrooms</li>`;
    price += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    list.innerHTML += `<li>$1 green peppers</li>`;
    price += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    list.innerHTML += `<li>$3 white sauce</li>`;
    price += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    list.innerHTML += `<li>$5 gluten-free crust</li>`;
    price += ingredients.glutenFreeCrust.price;
  }

  totalPrice.innerHTML = `$${price}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
