function getRandomId() { 
  return getRandomInt(16777215).toString(16);
}

function generateResults(itemName, timeToComplete) {
  return {
    id: getRandomId(),
    name: itemName,
    processingTime: timeToComplete,
    cost: null
  };
};

function getItem(itemName) {
  return new Promise(function(resolve) {
    var timeToComplete = getRandomInt(4);
    
    setTimeout(function() {
      var item = generateResults(itemName, timeToComplete);

      if(getRandomInt(100) > 75) {
        item.cost = getRandomInt(99999) / 100;
      }

      resolve(item);
    }, timeToComplete * 1000);
  });
}

function priceCheck(item) {
  return new Promise(function(resolve) {
    var timeToComplete = getRandomInt(5, 2);

    setTimeout(function() {
      item.processingTime += timeToComplete;
      item.cost = getRandomInt(9999999) / 100;

      resolve(item);
    }, timeToComplete * 1000);
  });
}