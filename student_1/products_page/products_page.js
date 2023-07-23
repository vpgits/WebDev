// Student Role: student_1
// Student Name: Heshan Wanigasinghe

// Show/hide the button based on the scroll position
let scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  let maxHeight = window.innerHeight / 2;
  if (window.scrollY > maxHeight) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Executes when the DOM is fully loaded and ready for manipulation
document.addEventListener("DOMContentLoaded", () => {
  // Retrieves all elements with the class 'btn-danger' (remove buttons)
  const removeCartItemButtons = document.getElementsByClassName("btn-danger");

  // Retrieves all elements with the class 'cart-quantity-input' (quantity input fields)
  const quantityInputs = document.getElementsByClassName("cart-quantity-input");

  // Retrieves all elements with the class 'shop-item-button' (add to cart buttons)
  const addToCartButtons = document.getElementsByClassName("shop-item-button");

  // Retrieves the first element with the class 'btn-ProceedToCheckout' (proceed to checkout button)
  const proceedToCheckoutButton = document.getElementsByClassName(
    "btn-ProceedToCheckout"
  )[0];

  // Attaches a click event listener to each remove button
  Array.from(removeCartItemButtons).forEach((button) => {
    button.addEventListener("click", removeCartItem);
  });

  // Attaches a change event listener to each quantity input field
  Array.from(quantityInputs).forEach((input) => {
    input.addEventListener("change", quantityChanged);
  });

  // Attaches a click event listener to each add to cart button
  Array.from(addToCartButtons).forEach((button) => {
    button.addEventListener("click", addToCartClicked);
  });

  // Attaches a click event listener to the proceed to checkout button
  proceedToCheckoutButton.addEventListener("click", purchaseClicked);
});

// Executes when the purchase button is clicked
function purchaseClicked() {
  // Retrieves the cart items container element
  const cartItems = document.getElementsByClassName("cart-items")[0];

  if (cartItems.children.length < 1) {
    // If the cart is empty (no items in the cart), show an alert and return
    alert("Cart is empty, add items to proceed to checkout");
    return;
  }

  // If the cart is not empty, proceed with the checkout process
  window.localStorage.removeItem("cart");

  let cart = document.getElementById("shopping-cart").innerHTML;

  window.localStorage.setItem("cart", cart);

  window.location.assign("/student_1/payment_page/payment_page.html");
}

// Executes when a remove button is clicked
function removeCartItem(event) {
  // Retrieves the button element that triggered the event
  const buttonClicked = event.target;

  // Removes the entire row containing the remove button from the cart items
  buttonClicked.parentElement.parentElement.remove();

  // Updates the total price of the cart
  updateCartTotal();
}

// Executes when the value of a quantity input field changes
function quantityChanged(event) {
  // Retrieves the input element that triggered the event
  const input = event.target;

  // Sets the input value to 1 if it is not a number or less than or equal to 0
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  // Updates the total price of the cart
  updateCartTotal();
}

// Executes when an add to cart button is clicked
function addToCartClicked(event) {
  // Retrieves the button element that triggered the event
  const button = event.target;

  // Retrieves the entire shop item container element
  const shopItem = button.parentElement.parentElement;

  // Retrieves the title of the shop item
  const title = shopItem.querySelector(".shop-item-name").innerText;

  // Retrieves the price of the shop item
  const price = shopItem.querySelector(".shop-item-price").innerText;

  // Retrieves the source URL of the shop item's image
  const imageSrc = shopItem.querySelector(".shop-item-image").src;

  // Adds the item to the cart
  addItemToCart(title, price, imageSrc);

  // Updates the total price of the cart
  updateCartTotal();
}

//Executes when an item is added to the cart
function addItemToCart(title, price, imageSrc) {
  // Creates a new div element for the cart row
  const cartRow = document.createElement("div");

  // Adds the class 'cart-row' to the cart row element
  cartRow.classList.add("cart-row");

  // Retrieves the cart items container element
  const cartItems = document.getElementsByClassName("cart-items")[0];

  // Retrieves all elements with the class 'cart-item-title' (existing cart item names)
  const cartItemNames = cartItems.getElementsByClassName("cart-item-title");

  // Checks if the item being added is already in the cart, displays an alert, and returns if it is
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      alert("This item is currently in the cart");
      return;
    }
  }

  // HTML content for the cart row, including the item image, title, price, quantity input, and remove button
  const cartRowContents = `
    <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`;

  // Sets the HTML content of the cart row element
  cartRow.innerHTML = cartRowContents;

  // Appends the cart row element to the cart items container
  cartItems.appendChild(cartRow);

  // Attaches a click event listener to the remove button in the cart row
  cartRow
    .querySelector(".btn-danger")
    .addEventListener("click", removeCartItem);

  // Attaches a change event listener to the quantity input field in the cart row
  cartRow
    .querySelector(".cart-quantity-input")
    .addEventListener("change", quantityChanged);
}

// Calculates and updates the total price of the cart
function updateCartTotal() {
  // Retrieves the cart items container element
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];

  // Retrieves all elements with the class 'cart-row' (cart rows)

  var cartRows = cartItemContainer.getElementsByClassName("cart-row");

  // Initializes the total price to 0
  var total = 0;

  // Retrieves each cart row element
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];

    // Retrieves the element with the class 'cart-price' (price of the item)
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];

    // Retrieves the element with the class 'cart-quantity-input' (quantity of the item)
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    // Retrieves the price value and removes the '$' symbol
    var price = parseFloat(priceElement.innerText.replace("$", ""));

    // Retrieves the quantity value
    var quantity = quantityElement.value;

    // Calculates the subtotal for the current item and adds it to the total
    total = total + price * quantity;
  }

  // Rounds the total price to two decimal places
  total = Math.round(total * 100) / 100;

  // Updates the total price display in the cart
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
