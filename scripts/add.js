var receiptBody = document.querySelector('#items tbody');
var countDisplay = document.getElementById('itemCount');
var costDisplay = document.getElementById('totalCost');
var timeDisplay = document.getElementById('totalTime');

var totalItems = 0;
var totalCost = 0;
var totalTime = 0;

var currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2, 
  maximumFractionDigits: 2
});

function addCellToRow(text, row) {
  var cell = row.insertCell();
  cell.appendChild(document.createTextNode(text));
}

function addToReceipt(item) {
 
  var itemRow = receiptBody.insertRow();
  addCellToRow(item.name, itemRow);
  addCellToRow(currencyFormatter.format(item.cost), itemRow);

  totalItems++;
  totalCost += item.cost;
  totalTime += item.processingTime;

  countDisplay.textContent = totalItems;
  costDisplay.textContent = currencyFormatter.format(totalCost);
  timeDisplay.textContent = totalTime + ' SEC';
};