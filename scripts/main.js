var itemInput = document.getElementById('item');
var notificationDisplay = document.getElementById('searchingNotification');

document.getElementById('addForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var itemName = itemInput.value;


  

  getItem(itemName)
    .then(function(item) {
      if(item.cost === null) {
        notificationDisplay.classList.add('check');
        return priceCheck(item);
      } else {
        return item;
      }
    })
    .then(function(itemWithCost) {

      addToReceipt(itemWithCost);
      notificationDisplay.classList.remove('show', 'check');
      
    });
  
  notificationDisplay.classList.add('show');
});

document.getElementById('timestamp').textContent = getDateTimeString();

