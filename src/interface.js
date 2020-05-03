$(document).ready(function() {
  tennisGame = new TennisGame()
  $('#scores').text('Tennis Game Scorer')

  $('#Player1').on('click', function() {
    tennisGame.scorePointPlayer1()
    $('#currentScore').text(tennisGame.currentScore())
  })

  $('#Player2').on('click', function() {
    tennisGame.scorePointPlayer2()
    $('#currentScore').text(tennisGame.currentScore())
  })

  $('#Reset').on('click', function() {
    tennisGame.reset()
    $('#currentScore').text(tennisGame.currentScore())
  })

})
