describe('TennisGame', function() {

  var tennisGame;

  beforeEach(function(){
    tennisGame = new TennisGame();
  })

  it('score starts at 0-0', function() {
    expect(tennisGame.currentScore()).toEqual('love-love')
  })

  it('can add points to player1s score', function() {
    tennisGame.scorePointPlayer1()
    expect(tennisGame.currentScore()).toEqual('10-love')
  })

  it('can add points to player2s score', function() {
    tennisGame.scorePointPlayer2()
    expect(tennisGame.currentScore()).toEqual('love-10')
  })

  it('will show duece when both players tie on 40 points', function() {
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    expect(tennisGame.currentScore()).toEqual('Duece')
  })

})
