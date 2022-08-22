function elementValueFinder(elementID) {
  const elementField = document.getElementById(elementID);
  const elementValue = elementField.value;
  const element = parseFloat(elementValue);
  if (isNaN(elementValue) || elementValue == "") {
    alert("Please enter a value");
  }
  return element;
}

function setValueInElement(idOfElement, valueToShow) {
  const elementSite = document.getElementById(idOfElement);
  elementSite.innerText = valueToShow;
}

function childNumber(elementId) {
  const listSize = document.getElementById(elementId).childNodes;

  const numberOfChilds = listSize.length;
  return numberOfChilds;
}
document
  .getElementById("player-cost-btn")
  .addEventListener("click", function () {
    const perPlayerPrice = elementValueFinder("per-player-cost");
    const childs = childNumber("players-list");
    const totalCostOfPlayers = perPlayerPrice * childs;

    setValueInElement("total-players-cost", totalCostOfPlayers);
  });
document
  .getElementById("total-cost-btn")
  .addEventListener("click", function () {
    const managerCost = elementValueFinder("manager-cost");
    const coachCost = elementValueFinder("coach-cost");
    const perPlayerPrice = elementValueFinder("per-player-cost");
    const childs = childNumber("players-list");
    const totalCostOfPlayers = perPlayerPrice * childs;

    const totalExpenses = totalCostOfPlayers + managerCost + coachCost;

    setValueInElement("total-expenses", totalExpenses);
  });
