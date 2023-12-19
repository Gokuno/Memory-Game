document.addEventListener('DOMContentLoaded', () => {
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const totalCards = cardValues.length * 2;
  
    // Duplicate the card values to create pairs
    const cardPairs = [...cardValues, ...cardValues];
  
    // Shuffle the card pairs
    const shuffledCards = shuffleArray(cardPairs);

     // Create HTML elements for each card
    const memoryGame = document.querySelector('.memory-game');
    shuffledCards.forEach(value => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.value = value;
      card.textContent = '?'; // Initial state, cards are face down
      card.addEventListener('click', () => flipCard(card));
      memoryGame.appendChild(card);
    });
  
    let flippedCards = [];
    let matchedPairs = 0;
  
    function flipCard(card) {
      // Prevent flipping more than two cards or clicking on matched cards
      if (flippedCards.length === 2 || card.classList.contains('matched')) {
        return;
      }
  
      card.textContent = card.dataset.value; // Reveal the card
  
      flippedCards.push(card);
  
      if (flippedCards.length === 2) {
        setTimeout(checkForMatch, 1000);
      }
    }
