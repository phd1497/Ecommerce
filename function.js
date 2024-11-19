
const cart = [];


function addToCart(event) {
    debugger
    const productElement = event.target.closest('.product'); // Find the closest parent .product
  const productName = productElement.querySelector('#name-item').textContent;
  const productPriceText = productElement.querySelector('#price-item').textContent;
  const productPrice = parseFloat(productPriceText.replace('Price: $', ''));
return;
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.name === productName);

  if (existingProduct) {
    // If the product is already in the cart, increase the quantity
    existingProduct.quantity += 1;
  } else {
    // If the product is not in the cart, add it as a new item
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  // Update the cart count in the header
  updateCartCount();
}

// Function to update the cart count in the header
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update the cart count display
  cartCountElement.textContent = totalItems;
}

// Attach the addToCart function to each "Add to Cart" button
const addButtons = document.querySelectorAll('#btn-add');
addButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
