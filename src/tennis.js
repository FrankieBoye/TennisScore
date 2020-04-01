function TennisGame(p1,p2){
  this.player1 = 0
  this.player2 = 0

  TennisGame.prototype.currentScore = function() {
    if(this.player1 == 0) this.player1 = "love"
    if(this.player2 == 0) this.player2 = "love"
    if(this.player1 == 40 && this.player2 == 40) return "Duece"
    return this.player1 + "-" + this.player2
  }

  TennisGame.prototype.scorePointPlayer1 = function() {
    this.player1 += 10
    return this.currentScore
  }

  TennisGame.prototype.scorePointPlayer2 = function() {
    this.player2 += 10
    return this.currentScore
  }

}
