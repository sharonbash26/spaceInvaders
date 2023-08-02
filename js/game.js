'use strict'

const BOARD_SIZE = 14
const ALIEN_ROW_LENGTH = 8
const ALIEN_ROW_COUNT = 3

const HERO = '🐱‍👤'
const ALIEN = '👽'
const LASER = '❗'
const GROUND = '🟫'
const EMPTY = ''


var gCountAlien = 0
// Matrix of cell objects. e.g.: {type: SKY, gameObject: ALIEN}
var gBoard
var gGame = {
    isOn: false,
    alienCount: 0
}
// Called when game loads
function onInit() {
    gGame.isOn=true
    gBoard = createBoard(BOARD_SIZE)
    createHero(gBoard)
    console.table(gBoard)
    renderBoard(gBoard, '.board-container')
    console.log(blinkLaser({ i: 2, j: 4 }))

}
// Create and returns the board with aliens on top, ground at bottom
// use the functions: createCell, createHero, createAliens
function createBoard(size) {
    var board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i][j] = EMPTY
            if (i === size - 1) {
                board[i][j] = GROUND
            }
        }
    }
    board = putAliensInBoard(size, board)
    return board
}

function putAliensInBoard(size, board) {
    for (var i = 0; i < ALIEN_ROW_COUNT; i++) {
        for (var j = size - ALIEN_ROW_LENGTH; j < size; j++) {
            board[i][j] = ALIEN
        }
    }
    return board
}






// Returns a new cell object. e.g.: {type: SKY, gameObject: ALIEN}
function createCell(gameObject = null) {
    return {
        type: SKY,
        gameObject: gameObject
    }
}



//not sure i want this!!
// position such as: {i: 2, j: 7}
function updateCell(pos, gameObject = null) {
    debugger
    gBoard[pos.i][pos.j].gameObject = gameObject
    var elCell = getElCell(pos)
    elCell.innerHTML = gameObject 
}
