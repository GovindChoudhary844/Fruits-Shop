// ============== Products carousel =============

// ============== Product filter =============
$(document).ready(function () {
  $('.filter-button').click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.product-card').show('1000');
    } else {
      $('.product-card').not('.' + value).hide('3000');
      $('.product-card').filter('.' + value).show('3000');
    }
  });
});

// ============== Add to Cart =============
let cartCount = 0;
const cartItems = [];

function addToCart(event) {
    cartCount++;
    document.getElementById('cartCount').innerHTML = cartCount;

    const productName = productCard.querySelector('.Product-name').innerText;
    const productPrice = parseFloat(productCard.querySelector('.mb-1').innerText.replace('$', ''));
    const productImage = productCard.querySelector('.product-image').src;

    cartItems.push({ name: productName, price: productPrice, quantity: 1, image: productImage });
    renderCartItems();
}

function incrementQuantity(index) {
    cartItems[index].quantity++;
    cartItems[index].price = cartItems[index].quantity * cartItems[index].price / (cartItems[index].quantity - 1);
    renderCartItems();
}

function decrementQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        cartItems[index].price = cartItems[index].quantity * cartItems[index].price / (cartItems[index].quantity + 1);
        renderCartItems();
    }
}
function renderCartItems() {
  const cartItemsList = document.querySelector('.cart-items');
  cartItemsList.innerHTML = '';
  let total = 0;

  cartItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex align-items-center my-2 p-3';

      const productImage = document.createElement('img');
      productImage.src = item.image;
      productImage.style.width = '50px';
      productImage.style.height = '50px';
      listItem.appendChild(productImage);

      const nameAndPrice = document.createElement('div');
      nameAndPrice.innerHTML = `<span class="Product-name">${item.name}</span> - $<span class="Product-price">${item.price.toFixed(2)}</span>`;
      nameAndPrice.classList.add('ms-3');
      listItem.appendChild(nameAndPrice);

      const quantityDiv = document.createElement('div');
      quantityDiv.classList.add('ms-auto', 'd-flex', 'align-items-center');

      const decrementButton = document.createElement('button');
      decrementButton.textContent = '-';
      decrementButton.classList.add('btn', 'btn-sm', 'btn-outline-primary', 'me-2');
      decrementButton.onclick = () => decrementQuantity(index);

      const quantityText = document.createElement('span');
      quantityText.textContent = item.quantity;
      quantityText.classList.add('me-2', 'fw-bold');

      const incrementButton = document.createElement('button');
      incrementButton.textContent = '+';
      incrementButton.classList.add('btn', 'btn-sm', 'btn-outline-primary');
      incrementButton.onclick = () => incrementQuantity(index);

      quantityDiv.appendChild(decrementButton);
      quantityDiv.appendChild(quantityText);
      quantityDiv.appendChild(incrementButton);
      listItem.appendChild(quantityDiv);
      cartItemsList.appendChild(listItem);

      total += item.price * item.quantity;
  });

  const totalPrice = document.querySelector('.total-price');
  totalPrice.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
}




// ============== Login Auth =============
function Login() {
  var Name, Email, Pass;
  Name = document.getElementById("Log-Name").value;
  Email = document.getElementById("Log-Email").value;
  Pass = document.getElementById("Log-Name").value;
  if (Name == "Govind Choudhary" && Email == "govindchoudhary844@gmail.com" && Pass == "Aryan844@") {
    alert("Login Successfull")
    window.open("index.html")
  }
  else {
    alert("User Not Found")
  }

}


