
const cart = [];
const products =[
    {
        name: "Clothes 1",
        price: 16,
        image: "image1.png"
    },
    {
        name: "Clothes 2",
        price: 15,
        image: "image2.png"
    },
    {
        name: "Clothes 3",
        price: 17,
        image: "image3.png"
    },
    {
        name: "Clothes 4",
        price: 18,
        image: "image4.png"
    }
];

displayProducts();
  

  function displayProducts() {
    debugger
    const productList = document.querySelector('.product-list');
  
    // Loop through each product in the array
    products.forEach(product => {
      // Create a new product div
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.setAttribute('product-id', product.id); // Set product-id as an attribute
  
      debugger
      const productImage = document.createElement('img');
      productImage.id = 'imgs';
      productImage.src = product.image;
      productImage.alt = product.name;
  
      const productName = document.createElement('h3');
      productName.id = 'name-item';
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.id = 'price-item';
      productPrice.textContent = `Price: ${product.price}`;
  
      const addToCartButton = document.createElement('button');
      addToCartButton.id = 'btn-add';
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', () => addToCart(product)); 
  
   
      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(addToCartButton);
  
   
      productList.appendChild(productDiv);
  }
)
  }
  // Function to handle adding to cart (you can modify this as per your requirements)
//   function addToCart(product) {
//     console.log(`Added to cart: ${product.name}, ${product.price}`);
  
//     // Here you can also update cart count or store cart items in an array
//     const cartCount = document.getElementById('cart-count');
//     cartCount.textContent = parseInt(cartCount.textContent) + 1; // Update cart count
//   }
  
//   displayProducts();