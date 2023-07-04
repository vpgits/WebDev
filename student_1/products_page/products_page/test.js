/* Student Role: student_1
   Student Name: Heshan Wanigasinghe */
   
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
   
   
   
       // Get the "Add to cart" buttons
   let addToCartButtons = document.querySelectorAll('.add-to-cart-button button');
   
   // Get the shopping cart div
   let shoppingCartDiv = document.getElementById('shopping-cart');
   
   // Create an object to keep track of the item quantities
   let itemQuantities = {};
   
   // Add event listeners to the "Add to cart" buttons
   addToCartButtons.forEach(function(button) {
     button.addEventListener('click', function() {
       // Get the product information
       let product = this.parentNode.parentNode;
       let productName = product.querySelector('h3').textContent;
       let productPrice = product.querySelector('.price').textContent;
       let productImageSrc = product.querySelector('.image img').src;
   
       // Create a unique identifier for the product based on its name and price
       let productId = productName + '-' + productPrice;
   
       // Check if the item already exists in the cart
       if (itemQuantities.hasOwnProperty(productId)) {
         // Increment the quantity if the item exists
         itemQuantities[productId]++;
         // Get the existing product element and update the quantity
         let existingProductElement = shoppingCartDiv.querySelector(`[data-product="${productId}"]`);
         let productQuantity = existingProductElement.querySelector('.product-quantity');
         productQuantity.textContent = 'Quantity: ' + itemQuantities[productId];
       } else {
         // Set the quantity to 1 if it's a new item
         itemQuantities[productId] = 1;
   
         // Create a new element to hold the product information and quantity
         let productElement = document.createElement('div');
         productElement.setAttribute('data-product', productId);
         
         // Create a new element for the product image
         let productImage = document.createElement('img');
         productImage.src = productImageSrc;
         productImage.alt = productName;
         productImage.className = 'product-image';
         productImage.style.width = '50px'; // Set the width of the image
   
         // Create a new element for the product details and quantity
         let productDetails = document.createElement('div');
         productDetails.innerHTML = '<strong>' + productName + '</strong> - ' + productPrice;
   
         let productQuantity = document.createElement('div');
         productQuantity.className = 'product-quantity';
         productQuantity.textContent = 'Quantity: ' + itemQuantities[productId];
   
         // Create buttons to increase and decrease the quantity
         let increaseButton = document.createElement('button');
         increaseButton.textContent = '+';
         increaseButton.addEventListener('click', function() {
           itemQuantities[productId]++;
           productQuantity.textContent = 'Quantity: ' + itemQuantities[productId];
         });
   
         let decreaseButton = document.createElement('button');
         decreaseButton.textContent = '-';
         decreaseButton.addEventListener('click', function() {
           if (itemQuantities[productId] > 1) {
             itemQuantities[productId]--;
             productQuantity.textContent = 'Quantity: ' + itemQuantities[productId];
           }
         });
   
         // Create a remove button for the product
         let removeButton = document.createElement('button');
         removeButton.textContent = 'Remove';
         removeButton.addEventListener('click', function() {
           // Remove the product from the shopping cart
           shoppingCartDiv.removeChild(productElement);
           // Decrement the quantity when removing an item
           itemQuantities[productId]--;
           // Remove the item from the quantity tracker if the quantity reaches zero
           if (itemQuantities[productId] === 0) {
             delete itemQuantities[productId];
           } else {
             // Update the quantity in the product element after removing one item
             productQuantity.textContent = 'Quantity: ' + itemQuantities[productId];
           }
         });
   
         // Append the product image, details, quantity, and buttons to the product element
         productElement.appendChild(productImage);
         productElement.appendChild(productDetails);
         productElement.appendChild(productQuantity);
         productElement.appendChild(increaseButton);
         productElement.appendChild(decreaseButton);
         productElement.appendChild(removeButton);
   
         // Add the product element to the shopping cart
         shoppingCartDiv.appendChild(productElement);
       }
     });
   });