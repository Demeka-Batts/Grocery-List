const items = [
    { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
  ];
  
  const cart = [];
  
  // ------------------ Complete the functions written below ------------------------------ //
  
  function logItemNames() {
    //TODO: use the .forEach() method to log out the name of each item
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    items.forEach((currentItem) => console.log(currentItem.name));
  }
  
  /**
   * @param {number} id
   * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
   */
  function findItemById(id) {
    // TODO: Use the .find() method to return the item who's id matches the passed in id
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    return items.find((currentItem) => currentItem.id === id);
  }
  
  /**
   * @returns {items[]} Returns a new array with capitalized names
   */
  function capitalizeNames() {
    // TODO:  Use the .map() and possibly .slice() methods and return a new items array with the item names capitalized
    // DO NOT MUTATE THE ORIGINAL ARRAY IN YOU LOGIC
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    return items.map((currentItem) => {
      const name = currentItem.name;
      // Capitalize the first letter of the name & concatenate with rest of name
      // String.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
      const newName = name.slice(0, 1).toUpperCase() + name.slice(1);
      // Re-assign current item's name to the new capitalized name
      currentItem.name = newName;
      // Return updated current item
      return currentItem;
    });
  }
  
  /**
   * @returns {number} the sum of all inventory items
   */
  
  function calculateTotalInventory() {
    // TODO Use the .reduce() method to return the total number of items in inventory
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    return items.reduce((totalInventory, currentItem) => {
      return totalInventory + currentItem.inventory;
    }, 0);
  }
  
  /**
   * @returns {number} the total price of all inventory items combined
   */
  function calculateAllInventoryPrice() {
    // TODO Use the .reduce() method to return the total price of all the items in inventory
    return items.reduce((totalInventoryPrice, currentItem) => {
      const totalItemPrice = currentItem.price * currentItem.inventory;
      return totalInventoryPrice + totalItemPrice;
    }, 0);
  }
  
  /**
   * @param {string} name
   * @returns {number} the price of the item passed in
   */
  function getItemPriceByName(name) {
    // TODO: Use your knowledge of objects and arrays to get the price of the item passed in
    // Array.find(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const item = items.find(
      (currentItem) => currentItem.name.toLowerCase() === name.toLowerCase() // lowercase both names just in case, before comparing strings
    );
    return item.price;
  }
  
  /**
   * @param {categoryId} id of category to find
   * @returns {items[]} array of all items which belong to the given category
   */
  function filterItemsByCategoryId(categoryId) {
    // TODO: use the .filter() method to filter out all items which don't belong the passed in category
    // Array.filter(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    return items.filter((currentItem) => currentItem.categoryId === categoryId);
  }
  
  function logCartItems() {
    // TODO: Loop through your cart and use the indexes to log the names of all items in your cart
    for (let i = 0; i < cart.length; i++) {
      // Find the item using the index & the findItemById function
      const currentId = parseInt(cart[i]);
      // Since currentId is a string, convert it to a number type
      const item = findItemById(currentId);
      // Log the name of the item
      console.log(item.name);
    }
  }
  
  /**
   * @returns { number } returns the total price of items in your cart
   */
  function calculateTotalCartPrice() {
    // TODO: Loop through your cart and return the total price of all items in your cart
    // Create a variable to store the total price of our cart items
    let totalPrice = 0;
  
    cart.forEach((currentItemId) => {
      // Find the item using the id & the findItemById function
      // Since currentItemId is a string, convert it to a number type
      const item = findItemById(parseInt(currentItemId));
      // Add the found item's price to the totalPrice
      totalPrice += item.price;
    });
    // Return totalPrice
    return totalPrice;
  
    // Using .reduce() method:
    // return cart.reduce((totalPrice, currentItemId) => {
    //   const item = findItemById(parseInt(currentItemId));
    //   return totalPrice + item.price;
    // }, 0);
  }
  
  // --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //
  
  const ids = prompt(
    "enter numbers separated by commas for the ids of the items you want to add to your cart",
    "1, 3, 5"
  );
  // Split the string of numbers into an array of strings.
  const idArr = ids.split(", ");
  
  idArr.forEach((id) => cart.push(id));
  console.log(`The names of all the items are: `);
  logItemNames();
  const itemId = prompt("enter the id of an item you are trying to find", "1");
  console.log(
    `The item with id ${itemId} is  ${JSON.stringify(
      findItemById(+itemId),
      null,
      2
    )}`
  );
  console.log(
    "We can map over an array and return a new array with the names capitalized like so: ",
    capitalizeNames()
  );
  console.log(
    "The total inventory of all grocery items is: ",
    calculateTotalInventory()
  );
  console.log(
    "The total price of all items in inventory is: ",
    calculateAllInventoryPrice()
  );
  
  const itemToFind = prompt(
    "Enter the name of an item to find the price of",
    "apple"
  );
  console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));
  
  const categoryId = prompt(
    "Enter a number between 1-4 to filter only items with that categoryId",
    2
  );
  console.log(
    `The items in category ${categoryId} are: `,
    filterItemsByCategoryId(+categoryId)
  );
  
  console.log("Cart items: ");
  logCartItems();
  
  console.log(
    `The total price of the items in your cart is: `,
    calculateTotalCartPrice()
  );
  