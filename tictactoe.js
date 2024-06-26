const box = document.querySelector('#board')
for(let i = 0; i<9; i++){
    const quadrant = document.createElement('div')
    quadrant.classList.add('quadrant')
    quadrant.id = 'quadrant'+(i+1).toString()
    quadrant.textContent = ''
    box.appendChild(quadrant)
}


const players = (function () {
    const player1 = document.querySelector('#playerOne')
    const submit1 = document.querySelector('#submit1')
    player1.addEventListener('submit', (event)=>{
        event.preventDefault()
        const playerOneName = document.querySelector('#playerOneName').value
        const playerOneMarker = document.querySelector('#playerOneMarker').value
        submit1.style.backgroundColor = 'green'
        players.playerUno = new createplayer(playerOneName, playerOneMarker)
    })

    const player2 = document.querySelector('#playerTwo')
    const submit2 = document.querySelector('#submit2')
    player2.addEventListener('submit', (event)=>{
        event.preventDefault()
        const playerTwoName = document.querySelector('#playerTwoName').value
        const playerTwoMarker = document.querySelector('#playerTwoMarker').value
        submit2.style.backgroundColor = 'green'
        players.playerDos = new createplayer(playerTwoName, playerTwoMarker)
    })
    return{       
        playerDos:'',
        playerUno:''
    }
})();


function createplayer(playername,marker){
    this.playername = playername
    this.marker = marker
}



const squares = document.querySelectorAll('.quadrant')
        let count = 0 
        squares.forEach(square=>{
            square.addEventListener('click', ()=>{ 
                    if(square.textContent == ''){
                        if(gameLogic() === 'win'){
                            alert('game over')
                            restart()
                            squares.forEach(square=> square.style.pointerEvents = 'none')
                        }
                        if (count % 2 === 0){
                            square.textContent = players.playerUno.marker
                        }
                        else{
                            square.textContent = players.playerDos.marker
                        }
                        count++
                    }
                    else{
                        alert("please select a free square!")
                    }
                
            })
        })

function restart(){
    const billboard = document.querySelector("#billboard")
    const button = document.createElement('button')
    button.classList.add('restart')
    button.textContent = 'Play Again'
    billboard.appendChild(button)
    button.addEventListener('click', ()=>{
        squares.forEach(square =>{
            square.textContent=''
            square.style.pointerEvents = 'auto'
        })
        button.remove()
        
    })
}

function gameLogic(){
    const quad1 = document.querySelector('#quadrant1')
    const quad2 = document.querySelector('#quadrant2')
    const quad3 = document.querySelector('#quadrant3')
    const quad4 = document.querySelector('#quadrant4')
    const quad5 = document.querySelector('#quadrant5')
    const quad6 = document.querySelector('#quadrant6')
    const quad7 = document.querySelector('#quadrant7')
    const quad8 = document.querySelector('#quadrant8')
    const quad9 = document.querySelector('#quadrant9')

    const billboard = document.querySelector("#billboard")

    if(quad1.textContent === quad2.textContent && quad2.textContent === quad3.textContent && quad1.textContent != ''){
        return 'win'
    }
    if(quad4.textContent === quad5.textContent && quad5.textContent === quad6.textContent && quad4.textContent != ''){
        billboard.textContent = 'game over'
        return 'win'
    }
    if(quad7.textContent === quad8.textContent && quad8.textContent === quad9.textContent && quad7.textContent != ''){
        billboard.textContent = 'game over'
        return 'win'
    }
    if(quad1.textContent === quad4.textContent && quad4.textContent === quad7.textContent && quad1.textContent != ''){
        billboard.textContent = 'game over'
        return 'win'
    }
    if(quad2.textContent === quad5.textContent && quad5.textContent === quad8.textContent && quad2.textContent != ''){
        billboard.textContent = 'game over'
        return 'win'
    }
    if(quad3.textContent === quad6.textContent && quad6.textContent === quad9.textContent && quad3.textContent != ''){
        billboard.textContent = 'game over'
        return 'win'
    }
    if(quad1.textContent === quad5.textContent && quad5.textContent === quad9.textContent && quad1.textContent != ''){
        billboard.textContent = 'game over'
        return 'win'
    }
    if(quad3.textContent === quad5.textContent && quad5.textContent === quad7.textContent && quad5.textContent != ''){
        billboard.textContent = 'game over'
        return 'win'
    }
    else{
        return false
    }
}


