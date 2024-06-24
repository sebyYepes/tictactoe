function createplayer(playername,marker){
    this.playername = playername
    this.marker = marker
}

const Gameboard = (function () {

    const arrayBoard = [[undefined,undefined,undefined], [undefined,undefined,undefined], [undefined,undefined,undefined]]

    return{
        GetBoard:function(){
            return arrayBoard
        },
        MakePlay:function(row, column, player){
            if(arrayBoard[row][column] === undefined) {
                arrayBoard[row][column] = player.marker
            }
            else{
                console.log('quadrant already occupied')
            }
        }
    }
})(); 

const player1 = new createplayer(prompt("enter name for player 1"), prompt("enter name for marker"))
const player2 = new createplayer(prompt("enter name for player 2"), prompt("enter name for marker"))


const game = (function() {
    let count = 0; 
    function playerTurn(){
        if (count % 2 === 0){
            const row = parseInt(prompt('player 1: choose a row'))
            const column = parseInt(prompt('player 1: choose a column'))

            // call gameboard 
            Gameboard.MakePlay(row, column, player1)
            Gameboard.GetBoard()
        }
        else{
            const row = parseInt(prompt('player 2: choose a row'))
            const column = parseInt(prompt('player 2: choose a column'))
            // call gameboard 
            Gameboard.MakePlay(row, column, player2)
            Gameboard.GetBoard()
        }
        count++
    }
    return playerTurn
})();

// game logic
function logic(){
    const win = 'win'
    arrayBoard = Gameboard.GetBoard()
    if (arrayBoard[0][0] === arrayBoard[0][1] && arrayBoard[0][1] === arrayBoard[0][2] && arrayBoard[0][0] != undefined){
        return win
    }
    if (arrayBoard[1][0] === arrayBoard[1][1] && arrayBoard[1][1] === arrayBoard[1][2] && arrayBoard[1][0] != undefined){
        return win
    }
    if (arrayBoard[2][0] === arrayBoard[2][1] &&  arrayBoard[2][1] === arrayBoard[2][2] && arrayBoard[2][0] != undefined){
        return win
    }

    if (arrayBoard[0][0] === arrayBoard[1][0] &&  arrayBoard[1][0] === arrayBoard[2][0] && arrayBoard[0][0] != undefined){
        return win
    }
    if (arrayBoard[0][1] === arrayBoard[1][1] &&  arrayBoard[1][1] === arrayBoard[2][1] && arrayBoard[0][1] != undefined){
        return win
    }
    if (arrayBoard[0][2] === arrayBoard[1][2] &&  arrayBoard[1][2] === arrayBoard[2][2] && arrayBoard[0][2] != undefined){
        return win
    }

    if (arrayBoard[0][0] === arrayBoard[1][1] &&  arrayBoard[1][1] === arrayBoard[2][2] && arrayBoard[0][0] != undefined){
        return win
    }
    if (arrayBoard[0][2] === arrayBoard[1][1] &&  arrayBoard[1][1] === arrayBoard[2][0] && arrayBoard[0][2] != undefined){
        return win
    }
    else{
        return false
    }
}

function gameChecker(){
    let count = 0
    let result = logic()

    while(result != 'win' && count<9){
        game()
        result = logic()
        count++
        arrayBoard = Gameboard.GetBoard()
        console.log(arrayBoard)
    }
    if (count === 8){
        console.log('tie')
    }
    else{
        console.log('game over')
    }
}

gameChecker()

