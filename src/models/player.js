class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  addCard(card) {
    this.hand.push(card);
  }

  calculateScore() {
    let score = 0;
    let aceCount = 0;

    for (const card of this.hand) {
      score += card.value;
      if (card.name === "Ace") aceCount++;
    }

    while (score > 21 && aceCount > 0) {
      score -= 10;
      aceCount--;
    }

    return score;
  }
}

module.exports = Player;
