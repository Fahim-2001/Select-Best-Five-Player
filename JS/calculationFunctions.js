// Function for extract input field value
function inputFieldValueFinder(elementID) {
  const elementField = document.getElementById(elementID);
  const elementValue = elementField.value;
  const element = parseFloat(elementValue);
  if (isNaN(elementValue) || elementValue == "") {
    alert("Please enter a value");
  }
  return element;
}
// Function for setting value to text field
function setValuToTextField(idOfElement, valueToShow) {
  const elementSite = document.getElementById(idOfElement);
  elementSite.innerText = valueToShow;
}
// Function for finding number of list elements
function childNumber(elementId) {
  const listSize = document.getElementById(elementId).childNodes;

  const numberOfChilds = listSize.length;
  return numberOfChilds;
}
// Function for finding total cost of players
function totalPLayerCost(perPlayerPrice, totalChilds) {
  const totalCostOfPlayers = perPlayerPrice * totalChilds;
  return totalCostOfPlayers;
}
