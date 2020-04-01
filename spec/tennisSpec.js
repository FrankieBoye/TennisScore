describe('TennisGame', function() {

  var tennisGame;
  var player1 = 0
  var player2 = 0

  beforeEach(function(){
    tennisGame = new TennisGame();
  })

  it('score starts at 0-0', function() {
    expect(tennisGame.currentScore()).toEqual('0-0')
  })

  it('can add points to player1s score', function() {
    tennisGame.scorePointPlayer1()
    expect(tennisGame.currentScore()).toEqual('10-0')
  })

  it('can add points to player2s score', function() {
    tennisGame.scorePointPlayer2()
    expect(tennisGame.currentScore()).toEqual('0-10')
  })

})
