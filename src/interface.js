$(document).ready(function() {
  tennisGame = new TennisGame()
  $('#scores').text('Tennis Game Scorer')

  $('#Player1').on('click', function() {
    tennisGame.scorePointPlayer1()
    $('#currentScore').text(tennisGame.currentScore())
    if(tennisGame.currentScore() == "Player 1 wins"){
      $('#Player1').prop('disabled', true)
      $('#Player2').prop('disabled', true)
    }
  })

  $('#Player2').on('click', function() {
    tennisGame.scorePointPlayer2()
    $('#currentScore').text(tennisGame.currentScore())
    if(tennisGame.currentScore() == "Player 2 wins"){
      $('#Player1').prop('disabled', true)
      $('#Player2').prop('disabled', true)
    }
  })

  $('#Reset').on('click', function() {
    tennisGame.reset()
    $('#Player1').prop('disabled', false)
    $('#Player2').prop('disabled', false)
    $('#currentScore').text(tennisGame.currentScore())
  })

})
