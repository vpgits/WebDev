// Student Role: student_1
// Student Name: Heshan Wanigasinghe


// Show/hide the button based on the scroll position
let scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
  let maxHeight = window.innerHeight / 2;
  if (window.scrollY > maxHeight) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});



// updated main js (do not change, make new commits or delete.....thanks :) )

document.addEventListener('DOMContentLoaded', () => {
  // Executes when the DOM is fully loaded and ready for manipulation

  const removeCartItemButtons = document.getElementsByClassName('btn-danger');
  // Retrieves all elements with the class 'btn-danger' (remove buttons)

  const quantityInputs = document.getElementsByClassName('cart-quantity-input');
  // Retrieves all elements with the class 'cart-quantity-input' (quantity input fields)

  const addToCartButtons = document.getElementsByClassName('shop-item-button');
  // Retrieves all elements with the class 'shop-item-button' (add to cart buttons)

  const proceedToCheckoutButton = document.getElementsByClassName('btn-ProceedToCheckout')[0];
  // Retrieves the first element with the class 'btn-ProceedToCheckout' (proceed to checkout button)

  Array.from(removeCartItemButtons).forEach(button => {
    button.addEventListener('click', removeCartItem);
  });
  // Attaches a click event listener to each remove button

  Array.from(quantityInputs).forEach(input => {
    input.addEventListener('change', quantityChanged);
  });
  // Attaches a change event listener to each quantity input field

  Array.from(addToCartButtons).forEach(button => {
    button.addEventListener('click', addToCartClicked);
  });
  // Attaches a click event listener to each add to cart button

  proceedToCheckoutButton.addEventListener('click', purchaseClicked);
  // Attaches a click event listener to the proceed to checkout button
});

function purchaseClicked() {
  // Executes when the purchase button is clicked

  window.localStorage.removeItem("cart");

  let cart  = document.getElementById('shopping-cart').innerHTML;
  
  window.localStorage.setItem("cart", (cart) );

  window.location.assign("/student_1/payment_page/payment_page.html");


  // alert('Thank you for your purchase');
  // // Displays an alert with a thank you message

  // const cartItems = document.getElementsByClassName('cart-items')[0];
  // // Retrieves the cart items container element

  // while (cartItems.firstChild) {
  //   cartItems.removeChild(cartItems.firstChild);
  // }
  // // Removes all child elements from the cart items container

  // updateCartTotal();
  // // Updates the total price of the cart
}

function removeCartItem(event) {
  // Executes when a remove button is clicked

  const buttonClicked = event.target;
  // Retrieves the button element that triggered the event

  buttonClicked.parentElement.parentElement.remove();
  // Removes the entire row containing the remove button from the cart items

  updateCartTotal();
  // Updates the total price of the cart
}

function quantityChanged(event) {
  // Executes when the value of a quantity input field changes

  const input = event.target;
  // Retrieves the input element that triggered the event

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  // Sets the input value to 1 if it is not a number or less than or equal to 0

  updateCartTotal();
  // Updates the total price of the cart
}

function addToCartClicked(event) {
  // Executes when an add to cart button is clicked

  const button = event.target;
  // Retrieves the button element that triggered the event

  const shopItem = button.parentElement.parentElement;
  // Retrieves the entire shop item container element

  const title = shopItem.querySelector('.shop-item-name').innerText;
  // Retrieves the title of the shop item

  const price = shopItem.querySelector('.shop-item-price').innerText;
  // Retrieves the price of the shop item

  const imageSrc = shopItem.querySelector('.shop-item-image').src;
  // Retrieves the source URL of the shop item's image

  addItemToCart(title, price, imageSrc);
  // Adds the item to the cart

  updateCartTotal();
  // Updates the total price of the cart
}

function addItemToCart(title, price, imageSrc) {
  //Executes when an item is added to the cart

  const cartRow = document.createElement('div');
  // Creates a new div element for the cart row

  cartRow.classList.add('cart-row');
  // Adds the class 'cart-row' to the cart row element

  const cartItems = document.getElementsByClassName('cart-items')[0];
  // Retrieves the cart items container element

  const cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  // Retrieves all elements with the class 'cart-item-title' (existing cart item names)

  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      alert('This item is currently in the cart');
      return;
    }
  }
  // Checks if the item being added is already in the cart, displays an alert, and returns if it is

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
  // HTML content for the cart row, including the item image, title, price, quantity input, and remove button

  cartRow.innerHTML = cartRowContents;
  // Sets the HTML content of the cart row element

  cartItems.appendChild(cartRow);
  // Appends the cart row element to the cart items container

  cartRow.querySelector('.btn-danger').addEventListener('click', removeCartItem);
  // Attaches a click event listener to the remove button in the cart row

  cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged);
  // Attaches a change event listener to the quantity input field in the cart row
}

function updateCartTotal() {
  // Calculates and updates the total price of the cart

  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  // Retrieves the cart items container element

  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  // Retrieves all elements with the class 'cart-row' (cart rows)

  var total = 0;
  // Initializes the total price to 0

  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    // Retrieves each cart row element

    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    // Retrieves the element with the class 'cart-price' (price of the item)

    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    // Retrieves the element with the class 'cart-quantity-input' (quantity of the item)

    var price = parseFloat(priceElement.innerText.replace('$', ''));
    // Retrieves the price value and removes the '$' symbol

    var quantity = quantityElement.value;
    // Retrieves the quantity value

    total = total + (price * quantity);
    // Calculates the subtotal for the current item and adds it to the total
  }

  total = Math.round(total * 100) / 100;
  // Rounds the total price to two decimal places

  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
  // Updates the total price display in the cart
}














// standby js (do not change, make new commits or delete... thanks :) )

// if (document.readyState == 'loading') {
//   document.addEventListener('DOMContentLoaded', ready)
// } else {
//   ready()
// }

// function ready() {
//   var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//   for (var i = 0; i < removeCartItemButtons.length; i++) {
//       var button = removeCartItemButtons[i]
//       button.addEventListener('click', removeCartItem)
//   }

//   var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//   for (var i = 0; i < quantityInputs.length; i++) {
//       var input = quantityInputs[i]
//       input.addEventListener('change', quantityChanged)
//   }

//   var addToCartButtons = document.getElementsByClassName('shop-item-button')
//   for (var i = 0; i < addToCartButtons.length; i++) {
//       var button = addToCartButtons[i]
//       button.addEventListener('click', addToCartClicked)
//   }

//   document.getElementsByClassName('btn-ProceedToCheckout')[0].addEventListener('click', purchaseClicked)
// }

// function purchaseClicked() {
//   alert('Thank you for your purchase')
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   while (cartItems.hasChildNodes()) {
//       cartItems.removeChild(cartItems.firstChild)
//   }
//   updateCartTotal()
// }

// function removeCartItem(event) {
//   var buttonClicked = event.target
//   buttonClicked.parentElement.parentElement.remove()
//   updateCartTotal()
// }

// function quantityChanged(event) {
//   var input = event.target
//   if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1
//   }
//   updateCartTotal()
// }

// function addToCartClicked(event) {
//   var button = event.target
//   var shopItem = button.parentElement.parentElement
//   var title = shopItem.getElementsByClassName('shop-item-name')[0].innerText
//   var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//   var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//   addItemToCart(title, price, imageSrc)
//   updateCartTotal()
// }

// function addItemToCart(title, price, imageSrc) {
//   var cartRow = document.createElement('div')
//   cartRow.classList.add('cart-row')
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//   for (var i = 0; i < cartItemNames.length; i++) {
//       if (cartItemNames[i].innerText == title) {
//           alert('This item is already added to the cart')
//           return
//       }
//   }
//   var cartRowContents = `
//       <div class="cart-item cart-column">
//           <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//           <span class="cart-item-title">${title}</span>
//       </div>
//       <span class="cart-price cart-column">${price}</span>
//       <div class="cart-quantity cart-column">
//           <input class="cart-quantity-input" type="number" value="1">
//           <button class="btn btn-danger" type="button">REMOVE</button>
//       </div>`
//   cartRow.innerHTML = cartRowContents
//   cartItems.append(cartRow)
//   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }

// function updateCartTotal() {
//   var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//   var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//   var total = 0
//   for (var i = 0; i < cartRows.length; i++) {
//       var cartRow = cartRows[i]
//       var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//       var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//       var price = parseFloat(priceElement.innerText.replace('$', ''))
//       var quantity = quantityElement.value
//       total = total + (price * quantity)
//   }
//   total = Math.round(total * 100) / 100
//   document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }