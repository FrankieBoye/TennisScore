function TennisGame(p1,p2){
  this.player1 = 0
  this.player2 = 0

  var player1score = 0
  var player2score = 0

  TennisGame.prototype.currentScore = function() {
    if(this.player1 == 0) player1score = "love"
    if(this.player1 == 1) player1score = 15
    if(this.player1 == 2) player1score = 30
    if(this.player1 == 3) player1score = 40

    if(this.player2 == 0) player2score = "love"
    if(this.player2 == 1) player2score = 15
    if(this.player2 == 2) player2score = 30
    if(this.player2 == 3) player2score = 40

    if(this.player1 == 3 && this.player2 == 3) return "Duece"

    return player1score + "-" + player2score
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
