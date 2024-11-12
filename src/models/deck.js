const Card = require("./card");

class Deck {
  constructor() {
    this.cards = [];
    this.initializeDeck();
    this.shuffleDeck();
  }

  initializeDeck() {
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
    const names = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

    for (const suit of suits) {
      for (let i = 0; i < values.length; i++) {
        this.cards.push(new Card(values[i], names[i], suit));
      }
    }
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drawCard() {
    return this.cards.pop();
  }
}

module.exports = Deck;
