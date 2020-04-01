describe('TennisGame', function() {

  var tennisGame;

  beforeEach(function(){
    tennisGame = new TennisGame();
  })

  it('score starts at 0-0', function() {
    expect(tennisGame.initialScore()).toEqual('0-0')
  })



})
