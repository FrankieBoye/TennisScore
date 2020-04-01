function TennisGame(p1,p2){
  this.player1 = 0
  this.player2 = 0

  TennisGame.prototype.initialScore = function() {
    return this.player1 + "-" + this.player2
  }
}
