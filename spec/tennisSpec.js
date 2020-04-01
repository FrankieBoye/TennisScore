describe('TennisGame', function() {

  beforeEach(function(){
    tennisGame = new TennisGame();
  })

  it('score starts at love-love', function() {
    expect(tennisGame.currentScore()).toEqual('love-love')
  })

  it('can add points to player1s score', function() {
    tennisGame.scorePointPlayer1()
    expect(tennisGame.currentScore()).toEqual('15-love')
  })

  it('can add points to player2s score', function() {
    tennisGame.scorePointPlayer2()
    expect(tennisGame.currentScore()).toEqual('love-15')
  })

  it('will show Duece when both players tie on 40 points', function() {
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    expect(tennisGame.currentScore()).toEqual('Deuce')
  })

  it('will show Advantage player1 if player 1 scores following Deuce', function() {
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer1()
    expect(tennisGame.currentScore()).toEqual('Advantage player 1')
  })

  it('will show Advantage player2 if player 2 scores following Deuce', function() {
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    expect(tennisGame.currentScore()).toEqual('Advantage player 2')
  })

  it('will revert to Duece if opposing player scores following Advantage', function() {
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer2()
    expect(tennisGame.currentScore()).toEqual('Deuce')
  })

  it('will show Advantage player1 if player 1 scores following Deuce', function() {
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer1()
    expect(tennisGame.currentScore()).toEqual('Advantage player 1')
  })

  it('will show player 1 has won if score is 50 and player 2 is 30 or less', function() {
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    tennisGame.scorePointPlayer1()
    expect(tennisGame.currentScore()).toEqual('Player 1 wins')
  })

  it('will show player 2 has won if score is 50 and player 1 is 30 or less', function() {
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    tennisGame.scorePointPlayer2()
    expect(tennisGame.currentScore()).toEqual('Player 2 wins')
  })

})
