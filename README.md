# Rock, Paper, Scissors
This is the classic game Rock-Paper-Scissors made with HTML, CSS and JavaScript to apply the new knowledge adquired in JS section. The player has to choose between rock, papers, scissors and then the computer will show what its choose is, then the winner of the round will be selected and will get one point, the first to get five points wins.
## Algorhytm
1. We need as an input the selection of the user between rock, papers and scissors.
2. Get computers choice.
3. Compare user and computer's results.
4. Choose a winner of the round.
   - If user and computer choose the same object then it will be a tie.
   - Player wins the round if:
     - Player chooses scissors and computers choose paper.
     - Player chooses rock and computer chooses scissors.
     - Player chooses paper and computer chooses rock.
   - Computers wins the round if it isn't a tie and the player doesn't have the conditions required to win the round.
5. The winner gets one point.
6. Check if the winner has 5 points.
   - If winner has 5 points then he won the game.
   - If winner has less than 5 points then repeat from step 1.
## Yes