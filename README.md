## Introduction

'TennisScore' is a simple application that outputs the score for a single game of Tennis.

The points for player 1 and player 2 are manually added and the application returns the score with the correct terminology (love, deuce etc).

The below image was given as an example to base the application on.

![image](https://user-images.githubusercontent.com/44870179/78070214-51eb8e00-7393-11ea-847a-7c07c085fa4e.png)

## Rules

1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
2. The running score of each game is described as follows: Scores from zero to three points are described as "Love", "Fifteen", "Thirty", and "Forty" respectively.
3. If at least three points have been scored by each player, and the scores are equal, the score is "Deuce".
4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is "Advantage" for the player in the lead.

## Getting Started

```
> git clone git@github.com:FrankieBoye/TennisScore.git
> cd TennisScore

Open SpecRunner.html and the JavaScript Console.

To start using the application type the following commands into the console and press enter.

> TennisGame = new TennisGame

To add point for player 1 type:
> TennisGame.scorePointPlayer1()

To add point for player 2 type:
> TennisGame.scorePointPlayer2()

Optional additional command:

To see the current score type:
> TennisGame.currentScore()

This should not be needed as the application will display the current score whenever it changes.

```

Console screenshots of example games:

![image](https://user-images.githubusercontent.com/44870179/78529186-fe38d480-77d8-11ea-803c-c5472e0032f0.png)

![image](https://user-images.githubusercontent.com/44870179/78531237-f4b16b80-77dc-11ea-88e7-c9577e0d582e.png)



## Testing

Tests are carried out using the Jasmine test framework. Copy the full path of SpecRunner.html file and paste this into a web browser address bar to view.

Jasmine screenshot:

![image](https://user-images.githubusercontent.com/44870179/78186637-f8ec2a80-7464-11ea-869a-9a270d623ab1.png)

## Updates

I had an issue going from Deuce to Advantage and back which I have now dealt with by adding additional code to the scorePoint functions. I have feature tested this and all ok.

![image](https://user-images.githubusercontent.com/44870179/78757007-b13d3580-7973-11ea-8050-cae4596356b6.png)

## To do

With more time there are a few improvements I would have liked to make to this application.

I would like to implement some sort of restart function. This would ask the user if they would like to start a new game after one player has won.

It would also be nice to have a front end to interact with the application in addition to the console.


|      TECH STACK                                      |
|    :------:                                          |
|JavaScript \| Jasmine|
