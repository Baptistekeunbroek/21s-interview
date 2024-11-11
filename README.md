# Can you beat the dealer at 21?

### Model the game
- Create a single deck of playing cards.
- Two players (called Sam and the Dealer) who will play against each other.
- Each player is given two cards from the top of a shuffled deck of cards.

### Rules to implement
1. Determine score of a hand.
2. Check if either player has blackjack (21) with their initial hand and wins the game.
3. If neither player has blackjack, then Sam can start drawing cards from the top of the deck.
   - Sam should stop drawing cards from the deck if their total reaches 17 or higher.
   - Sam has lost the game if their total is higher than 21.
4. When Sam has stopped drawing cards, the Dealer can start drawing cards from the top of the deck.
   - The Dealer should stop drawing cards when their total is higher than Sam.
   - The Dealer has lost the game if their total is higher than 21.
5. Determine which player wins the game.
