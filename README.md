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

![image](https://user-images.githubusercontent.com/44870179/78814477-98aa3b00-79c6-11ea-9838-b5b1e5bf2765.png)

## Updates

I have added Game Point and Match Point functions. If player 1 can win the game by scoring the next point then the score is displayed along with the text "Game Point". If player 2 can win the game by winning the next point then the score is displayed with the text "Break Point".

For the purposes of this application, we will assume that player 1 is always serving.

![image](https://user-images.githubusercontent.com/44870179/78814866-4a496c00-79c7-11ea-9018-7bbb7e5f9e6d.png)


## Interface

I have created a basic interface to interact with the application without using the console.

![image](https://user-images.githubusercontent.com/44870179/80892054-1f012680-8cc0-11ea-8edc-c7e9e7f3ddbc.png)

Open the tennis.html file and then add scores to the required player by pressing the player buttons. The screenshot above shows player 1 winning the first point.


|      TECH STACK                                      |
|    :------:                                          |
|JavaScript \| Jasmine \| jQuery |
