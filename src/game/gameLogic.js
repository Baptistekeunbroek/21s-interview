const Deck = require("../models/deck");
const Player = require("../models/player");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askPlayer() {
  return new Promise((resolve) => {
    rl.question(
      "Sam, do you want to draw another card? (yes/no): ",
      (answer) => {
        resolve(answer.toLowerCase() === "yes");
      }
    );
  });
}

async function playGame() {
  const deck = new Deck();
  const sam = new Player("Sam");
  const dealer = new Player("Dealer");

  sam.addCard(deck.drawCard());
  sam.addCard(deck.drawCard());
  dealer.addCard(deck.drawCard());
  dealer.addCard(deck.drawCard());

  console.log(
    sam.hand,
    `${sam.name} starts with a score of ${sam.calculateScore()}`
  );
  console.log(
    dealer.hand,
    `${dealer.name} starts with a score of ${dealer.calculateScore()}`
  );

  if (sam.calculateScore() === 21) return `${sam.name} wins with a Blackjack!`;
  if (dealer.calculateScore() === 21)
    return `${dealer.name} wins with a Blackjack!`;

  while (sam.calculateScore() < 17) {
    console.log(
      sam.hand,
      `Current score for ${sam.name}: ${sam.calculateScore()}`
    );

    const wantsToDraw = await askPlayer();
    if (!wantsToDraw) break;

    sam.addCard(deck.drawCard());
    console.log(
      sam.hand,
      `New card drawn. ${sam.name}'s new score is ${sam.calculateScore()}`
    );

    if (sam.calculateScore() > 21) {
      console.log(`${sam.name} has gone over 21. ${dealer.name} wins!`);
      rl.close();
      return;
    }
  }

  while (dealer.calculateScore() <= sam.calculateScore()) {
    dealer.addCard(deck.drawCard());
    console.log(
      "Dealer's hand",
      dealer.hand,
      `Dealer draws a card. ${
        dealer.name
      }'s new score is ${dealer.calculateScore()}`
    );

    if (dealer.calculateScore() > 21) {
      console.log(`${dealer.name} has gone over 21. ${sam.name} wins!`);
      rl.close();
      return;
    }
  }

  const result =
    dealer.calculateScore() >= sam.calculateScore()
      ? `${dealer.name} wins!`
      : `${sam.name} wins!`;

  console.log(result);
  rl.close();
}

module.exports = playGame;
