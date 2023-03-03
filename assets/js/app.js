function searchGame() {
  // DOM
  const input = document.getElementById('filter').value.toUpperCase()
  ;
  const gameContainer = document.getElementById('product__container grid');
  console.log(gameContainer);
  
  const games = gameContainer.getElementByClassName('product__card');
  console.log(games);
  
  
  for(let i = 0; i < games.length; i++) {
    let title = games[i].querySelector(".product__body h3.product__title");
    console.log(title);
    
    if(title.innerText.toUpperCase().indexOf(input) > -1) {
      games[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
