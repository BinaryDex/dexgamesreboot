const userCardContainer = document.querySelector("[data-game-cards-container]")
const searchInput = document.querySelector("[data-search]")

let games = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  games.forEach(user => {
    const isVisible = game.name.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})
