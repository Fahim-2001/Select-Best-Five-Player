document
  .getElementById("player-cost-btn")
  .addEventListener("click", function () {
    const perPlayerPrice = inputFieldValueFinder("per-player-cost");
    const childs = childNumber("players-list");
    const costOfPlayers = totalPLayerCost(perPlayerPrice, childs);

    setValuToTextField("total-players-cost", costOfPlayers);
  });
document
  .getElementById("total-cost-btn")
  .addEventListener("click", function () {
    const managerCost = inputFieldValueFinder("manager-cost");
    const coachCost = inputFieldValueFinder("coach-cost");
    const perPlayerPrice = inputFieldValueFinder("per-player-cost");
    const childs = childNumber("players-list");
    const costOfPlayers = totalPLayerCost(perPlayerPrice, childs);

    const totalExpenses = costOfPlayers + managerCost + coachCost;

    setValuToTextField("total-expenses", totalExpenses);
  });
