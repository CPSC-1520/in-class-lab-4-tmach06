
// Enter your code below.

// Selecting new-order-form
const newOrderForm = document.querySelector('#new-order-form');

// Add event listener to submit and prevent default
newOrderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Assign elements to variables
  const itemName = event.target.elements['order-item-name'];
  const itemPrice = event.target.elements['order-item-price'];
  const itemSize = event.target.elements['order-size'];

  
  console.log(`ItemName: ${itemName.value}`);
  console.log(`ItemPrice: ${itemPrice.value}`);
  console.log(`ItemSize: ${itemSize.value}`);

  // Validation
  let isFormValid = true;

  if (isValueNotEmpty(itemName.value)) {
    itemName.classList.remove('is-invalid');
  } else {
    itemName.classList.add('is-invalid');
    isFormValid = false;
  }
  
  if (isValueNotEmpty(itemPrice.value) && isGreaterThanFive(itemPrice.value)) {
    itemPrice.classList.remove('is-invalid');
  } else {
    itemPrice.classList.add('is-invalid');
    isFormValid = false;
  }

  if (isValueNotEmpty(itemSize.value)) {
    itemSize.classList.remove('is-invalid');
  } else {
    itemSize.classList.add('is-invalid');
    isFormValid = false;
  }

  // Add items and reset if valid otherwise throw invalid
  if (isFormValid) {
    addOrderItem(itemName.value, itemPrice.value, itemSize.value);

    itemName.value = '';
    itemPrice.value = '';
    itemSize.value = '';
  } else {
    console.log('Invalid input, check name, price and size again!');
  }
});




// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}