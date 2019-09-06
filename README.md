# Connect4

[Connect4 Demo](http://ec2-18-188-3-119.us-east-2.compute.amazonaws.com:3001/)

## What it is:
Connect4 is a single-page app implementation of the game Connect Four. 

## What it looks like:
![Image description](https://github.com/codingwithlis/ConnectFour/blob/master/Connect4.png)

## How it works:
The game Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. Connect Four is a solved game. The first player can always win by playing the right moves.

## How it was built:
- Used ReactJS for all views.
- Used bundle with Webpack.
- Implemented all the game login in the client code.
- Used nodemon to watch for changes in `server.js`.

## Future Plans:
- Add a database using MongoDB, MySQL, or Postgres to store your scores so they are not lost when restarting.
- Keep track of the winner from the last round and allow the winner (Red or Black) to make the first move on the next round of gameplay.
- Apply CSS styling to make the game look more realistic. 

## Technologies used:
- Javascript
- Html
- Css
- React
- Docker
- AWS
- EC2
