// Funtion to Set player names in list
function addPlayerName(element) {
  const playerName =
    element.parentNode.parentNode.children[1].children[0].innerText;

  const playerListElement = document.getElementById("players-list");
  const newPlayer = document.createElement("li");
  newPlayer.innerText = playerName;
  playerListElement.appendChild(newPlayer);

  const listSize = document.getElementById("players-list").childNodes;
  const numberOfChilds = listSize.length;
  if (numberOfChilds > 5) {
    alert("Select limit is up. You Cannot select more than FIVE players");
  }
  onclick = element.disabled = "true";
}
