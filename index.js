document.addEventListener('DOMContentLoaded', () => {
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const totalCards = cardValues.length * 2;
  
    // Duplicate the card values to create pairs
    const cardPairs = [...cardValues, ...cardValues];
  
    // Shuffle the card pairs
    const shuffledCards = shuffleArray(cardPairs);
