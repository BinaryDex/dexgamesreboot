// youtube tutorial moment
function searchGame() {
  // DOM
  const input = document.getElementById('filter').value.toUpperCase();
  const gameContainer = document.getElementById('game-lists');
  console.log(gameContainer);
  
  const games = gameContainer.getElementsByClassName('game');
  console.log(games);
  
  
  for(let i = 0; i < games.length; i++) {
    let title = games[i].querySelector(".game-body h3.game-title");
    console.log(title);
    
    if(title.innerText.toUpperCase().indexOf(input) > -1) {
      games[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}