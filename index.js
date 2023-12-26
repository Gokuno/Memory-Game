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
    function checkForMatch() {
      const [card1, card2] = flippedCards;
  
      if (card1.dataset.value === card2.dataset.value) {
        // Matched pair
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
  
        if (matchedPairs === cardValues.length) {
          alert('Congratulations! You matched all pairs.');
        }
      } else {
        // Not a match, flip cards back
        card1.textContent = '?';
        card2.textContent = '?';
      }
        
    flippedCards = []; // Reset flipped cards
    }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  });
