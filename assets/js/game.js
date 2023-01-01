export class Game {
    //Game attributes
    choices;
    _player1;
    _player2;
    constructor(player1, player2) {
        //Map that helps translating numbers to strings.
        this.choices = new Map([
            [1, "rock"],
            [2, "paper"],
            [3, "scissors"]
        ]);
        //Players of the game
        this._player1 = player1;
        this._player2 = player2;
    }
    //Starts the match, returns a string with the winner of the match.
    startMatch() {
        //Array used to handle match winner. See selectWinner() for more.
        const players = this.selectWinner(this._player1, this._player2);
        return this.matchResults(players);
    }
    //Evaluates whether the game is a tie or who won. Returns an string with the winner and the condition of winning met or says the game was a tie.
    matchResults(players) {
        if (players[0] == null) {
            return "It's a tie";
        }
        else {
            return players[0].name + " won the game! " + this.choices.get(players[0].choice) + " beats " + this.choices.get(players[1].choice);
        }
    }
    //Returns an array where the first element if the winner and the second the loser.
    selectWinner(player1, player2) {
        //Finds if condition are met for the player1 to win.
        const winningCondition = [
            player1.choice == 1 && player2.choice == 3,
            player1.choice == 2 && player2.choice == 1,
            player1.choice == 3 && player2.choice == 2,
        ].some(condition => condition);
        //Returns [null, null] if its a tie.
        if (player1.choice == player2.choice) {
            return [null, null];
        }
        //If player1 wins the game
        else if (winningCondition) {
            return [player1, player2];
        }
        //Else player2 wins the game.
        else {
            return [player2, player1];
        }
    }
}
