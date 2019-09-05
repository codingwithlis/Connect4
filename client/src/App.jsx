import React, { Component } from 'react';
import Row from "./Row.jsx";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { board: [], gameOver: false, message: '', player1: 1, player2: 2, playingNow: null };
        this.play = this.play.bind(this);
    };

    start(){
        let board = [];
        for (let i = 0; i < 6; i ++){
            let row = [];
            for (let o = 0; o < 7; o ++){
                row.push(null)
            };
            board.push(row);
        };
        this.setState({
            board,
            playingNow: this.state.player1,
            gameOver: false,
            message: ''
        });
    };

    switchPlayers() {
        return (this.state.playingNow === this.state.player1) ? this.state.player2 : this.state.player1;
      };
      
    play(col) {
        if (!this.state.gameOver) {
            let board = this.state.board;
                for (let row = 5; row >= 0; row--) {
                    if (!board[row][col]) {
                        board[row][col] = this.state.playingNow;
                        break;
                    };
                };
          let result = this.checkAll(board);
            if (result === this.state.player1) {
                this.setState({ board, gameOver: true, message: 'Red Wins !' });
            } else if (result === this.state.player2) {
                this.setState({ board, gameOver: true, message: 'Blue Wins !' });
            } else if (result === 'tie') {
                this.setState({ board, gameOver: true, message: 'It is a Tie ! '});
            } else {
                this.setState({ board, playingNow: this.switchPlayers() });
            };
            } else {
            this.setState({ message: 'Game over. Click PLAY to try again!' });
            };
        };
      
    vertical(board) {
        for (let row = 3; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                if (board[row][col]) {
                if (board[row][col] === board[row - 1][col] && board[row][col] === board[row - 2][col] && board[row][col] === board[row - 3][col]) {
                    return board[row][col];
                    }
                }
            }
        }
    };
  
    horizontal(board) {
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                if (board[row][col]) {
                if (board[row][col] === board[row][col + 1] && board[row][col] === board[row][col + 2] && board[row][col] === board[row][col + 3]) {
                        return board[row][col];
                    }
                }
            }
        }
    };
    
    diagonalRight(board) {
        for (let row = 3; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                if (board[row][col]) {
                    if (board[row][col] === board[row - 1][col + 1] && board[row][col] === board[row - 2][col + 2] && board[row][col] === board[row - 3][col + 3]) {
                        return board[row][col];
                    }
                }
            }
        }
    };
  
    diagonalLeft(board) {
        for (let r = 3; r < 6; r++) {
            for (let c = 3; c < 7; c++) {
                if (board[r][c]) {
                if (board[r][c] === board[r - 1][c - 1] && board[r][c] === board[r - 2][c - 2] && board[r][c] === board[r - 3][c - 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    };
  
    tie(board) {
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                if (board[row][col] === null) {
                    return null;
                }
            }
        }
        return 'tie';    
    };
  
    checkAll(board) {
        return this.vertical(board) || this.horizontal(board) || this.diagonalLeft(board) || this.diagonalRight(board) || this.tie(board);
        };
    
    componentWillMount() {
        this.start();
        };

    render() {
        return (
        <div>
            <p className="title">CONNECT 4</p>
            <button className="button" onClick={() => {this.start()}}>PLAY</button>
            <table>
                <thead>
                </thead>
            <tbody>
                {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
            </tbody>
            </table>
                <p className="message">{this.state.message}</p>
        </div>
        );
    };
};

export default App;








