let scrollToTopBtn = document.querySelector('.scroll-to-top');

// Show/hide the button based on the scroll position
window.addEventListener('scroll', function() {
  let maxHeight = window.innerHeight / 2;
  if (window.scrollY > maxHeight) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const removeCartItemButtons = document.querySelectorAll('.btn-danger');
  removeCartItemButtons.forEach(button => {
    button.addEventListener('click', removeCartItem);
  });

  const quantityInputs = document.querySelectorAll('.cart-quantity-input');
  quantityInputs.forEach(input => {
    input.addEventListener('change', quantityChanged);
  });

  const addToCartButtons = document.querySelectorAll('.shop-item-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartClicked);
  });

  const proceedToCheckoutButton = document.querySelector('.btn-ProceedToCheckout');
  proceedToCheckoutButton.addEventListener('click', purchaseClicked);
});

let shoppingCartCard;

function purchaseClicked() {
<<<<<<< HEAD
  shoppingCartCard  = document.getElementById("shopping-cart").innerHTML;
  window.location.replace("/student_1/payment_page.html")
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
=======
  // alert('Thank you for your purchase');
  const cartItems = document.querySelector('.cart-items');
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
>>>>>>> 63c8349a93a0d016eccf955271c1948403aedab3
  }
  window.location.replace =('/products_page/payment_page.html');
  updateCartTotal();
}

function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.cart-row').remove();
  updateCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  const button = event.target;
  const shopItem = button.closest('.shop-item');
  const title = shopItem.querySelector('.shop-item-name').innerText;
  const price = shopItem.querySelector('.shop-item-price').innerText;
  const imageSrc = shopItem.querySelector('.shop-item-image').src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  const cartItems = document.querySelector('.cart-items');
  const cartItemNames = cartItems.querySelectorAll('.cart-item-title');
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      alert('This item is already added to the cart');
      return;
    }
  }
  const cartRowContents = `
    <div class="cart-row">
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
    </div>`;
  cartItems.insertAdjacentHTML('beforeend', cartRowContents);
  const cartRow = cartItems.lastElementChild;
  const removeButton = cartRow.querySelector('.btn-danger');
  removeButton.addEventListener('click', removeCartItem);
  const quantityInput = cartRow.querySelector('.cart-quantity-input');
  quantityInput.addEventListener('change', quantityChanged);
}

function updateCartTotal() {
<<<<<<< HEAD
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

export {shoppingCartCard};
=======
  const cartRows = document.querySelectorAll('.cart-row');
  let total = 0;
  cartRows.forEach(cartRow => {
    const priceElement = cartRow.querySelector('.cart-price');
    const quantityElement = cartRow.querySelector('.cart-quantity-input');
    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = quantityElement.value;
    total += price * quantity;
  });
  total = Math.round(total * 100) / 100;
  document.querySelector('.cart-total-price').innerText = '$' + total;
}











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
>>>>>>> 63c8349a93a0d016eccf955271c1948403aedab3
