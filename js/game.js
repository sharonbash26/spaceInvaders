'use strict'

const BOARD_SIZE = 14
const ALIEN_ROW_LENGTH = 8
const ALIEN_ROW_COUNT = 3


const ALIEN = 'ALIEN'
const LASER = 'LASER'
const GROUND = 'GROUND'
const SKY = 'SKY'


const GROUND_IMG = '🟫'
const ALIEN_IMG = '👽'
const LASER_IMG = '❗'

var gScore = 0
// Matrix of cell objects. e.g.: {type: SKY, gameObject: ALIEN}
var gBoard
var gGame = {
    isOn: false,
    alienCount: 0
}

function onInit() {
    gGame.isOn = true
    gBoard = createBoard(BOARD_SIZE)
    createHero(gBoard)
    console.table(gBoard)
    renderBoard(gBoard)
}

function createCell(gameObject = null) {
    return {
        type: SKY,
        gameObject: gameObject
    }
}

function createBoard(size) {
    var board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i][j] = { type: SKY, gameObject: null }
            if (i === size - 1) {
                board[i][j].type = GROUND
            }
        }
    }
    board = putAliensInBoard(size, board)
    return board
}

function putAliensInBoard(size, board) {
    for (var i = 0; i < ALIEN_ROW_COUNT; i++) {
        for (var j = size - ALIEN_ROW_LENGTH; j < size; j++) {
            board[i][j].gameObject = ALIEN
            gCountAliens++
        }
    }
    return board
}

function updateScore(count) {
    var elScore = document.querySelector('h4 span')
    elScore.innerText = count
}

function isVictory() {
    var msgModal = 'You Win!'
    openModal(msgModal)
    clearInterval(gIdShootInterval)
    gGame.isOn=false
}



function restart() {
    closeModal() 
    gScore = 0
    updateScore(gScore)
    gCountAliens=0
    onInit()


}
