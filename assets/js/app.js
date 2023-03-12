// Get the input field and card container
const searchInput = document.getElementById("searchInput");
const cardContainer = document.getElementById("cardContainer");

// Add event listener to the input field
searchInput.addEventListener("keyup", filterCards);

// Function to filter the cards based on the search input
function filterCards() {
	// Get the search input value
	const searchValue = searchInput.value.toLowerCase();

	// Get all the cards
	const cards = cardContainer.getElementsByClassName("card");

	// Loop through all the cards and hide/show based on the search input
	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		const cardText = card.textContent.toLowerCase();
		if (cardText.includes(searchValue)) {
			card.style.display = "block";
		} else {
			card.style.display = "none";
		}
	}
}
