var itemInput = document.getElementById('item');
var notificationDisplay = document.getElementById('searchingNotification');

function displayError(reason) {
  $errorDiv.innerText = `Operation could not complete. Reason given was: ${reason}`;
}

document.getElementById('addForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var itemName = itemInput.value;

  getItem(itemName)

    .then(function(item) {    
      if (!item.cost) {
        notificationDisplay.classList.add('check');
        return priceCheck(item);
      }

      return item;
    })

    .then(function(myItem) {
      addToReceipt(myItem);
    })

    .catch((error) => console.error)

    .finally(function() {
      itemInput.value = "";
      notificationDisplay.classList.remove('show', 'check')
    });


    
  // <div id="searchingNotification">
  //   <h2 id="check">Double Checking Price</h2>
  //   <h2 id="find">Retrieving Your Item</h2>
  // </div>


  // Hello and welcome to the Tam development team!
  // Your first job is to fill in the logic here.
  // I will help guide you through the code so you know exactly what is needed.
  
  // Start by calling `getItem(itemName)` (this is defined in actions.js).   
  // This function returns a promise and can take up to 4 seconds to complete.
  // When the promise resolves, the callback will be given an item object:
  /* 
    {
      id: [hexadecimal number],
      name: [string],
      processingTime: [integer],
      cost: [decimal number OR null]
    }
   */

  // The problem is, items don't always come from the warehouse with a price tag.
  // I am not saying the warehouse is inefficient, but Tam does like to haggle and
  // not having a price tag can be an advantage to the seller.
  
  // So the item given to the callback can either have a cost or the cost will be `null`.
  // If it is null, you need to call `priceCheck(item)` (defined in actions.js). 
  // This function will return a promise and takes between 2 and 6 seconds.
  // Return that promise from the callback so you can chain it.
  
  // If the item does have a cost, you can return the item itself from the callback 
  // so it can be passed to the next callback in the chain.

  // If set up correctly the next callback in the chain will be given an item with a cost,
  // regardless of a price check or not.
  // In the next callback of the chain, simply call `addToReceipt(myItemWithACost)` (defined in add.js).
  // This takes an item object (with a cost) and will update the receipt display.

  // To notify the user of what is going on, you have `notificationDisplay`.
  // Start by adding the class "show" to this element at the bottom of this event handler.
  // It should be the last line before the last set of `});`.

  // If you have to do a price check, add the class "check" to `notificationDisplay`.
  // Be sure to do this before you return the price check promise in the first callback.

  // Lastly, in the second callback of the chain, remove both 
  // the "show" and "check" classes from `notificationDisplay`.

  // And that should be it! You should be able to use the application now!

  // Hint: this will **not** be a lot of code.
  notificationDisplay.classList.add('show');
});

document.getElementById('timestamp').textContent = getDateTimeString();

/// End of Script ///