$(document).ready(function() {
  tennisGame = new TennisGame()
  $('#scores').text('Tennis Game')

  $('#Player1').on('click', function() {
    tennisGame.scorePointPlayer1()
    $('#currentScore').text(tennisGame.currentScore())
  })

  $('#Player2').on('click', function() {
    tennisGame.scorePointPlayer2()
    $('#currentScore').text(tennisGame.currentScore())
  })

})
