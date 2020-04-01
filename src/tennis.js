function TennisGame(){
  this.player1 = 0
  this.player2 = 0

  var player1score = 0
  var player2score = 0

  TennisGame.prototype.calculateScore = function() {
    if(this.player1 == 0) player1score = "love"
    if(this.player1 == 1) player1score = 15
    if(this.player1 == 2) player1score = 30
    if(this.player1 == 3) player1score = 40

    if(this.player2 == 0) player2score = "love"
    if(this.player2 == 1) player2score = 15
    if(this.player2 == 2) player2score = 30
    if(this.player2 == 3) player2score = 40
  }

  TennisGame.prototype.currentScore = function() {
    this.calculateScore()
    var score = player1score + "-" + player2score

    if(this.player1 == 3 && this.player2 == 3) score = "Deuce"
    if(this.player1 == 4 && this.player2 == 3) score = "Advantage player 1"
    if(this.player1 == 3 && this.player2 == 4) score = "Advantage player 2"

    if(this.player1 == 4 && this.player2 == 4) score = "Deuce"
    if(this.player1 == 4 && this.player2 <= 2) score = "Player 1 wins"
    if(this.player1 == 5 && this.player2 <= 3) score = "Player 1 wins"

    if(this.player2 == 4 && this.player1 <= 2) score = "Player 2 wins"
    if(this.player2 == 5 && this.player1 <= 3) score = "Player 2 wins"

    return score
  }

  TennisGame.prototype.scorePointPlayer1 = function() {
    this.player1 += 1
    return this.currentScore
  }

  TennisGame.prototype.scorePointPlayer2 = function() {
    this.player2 += 1
    return this.currentScore
  }

}
