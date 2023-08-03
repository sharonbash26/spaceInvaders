'use strict'
//sharon  sharon sharon last update !!!!!!!!!!!!!!!!!!!!!
var gHero
const LASER_SPEED = 80
const HERO = 'HERO'
const HERO_IMG = '🐱‍👤'

var gScore=0

function createHero(board) {
    var middleLocationHero = Math.floor(BOARD_SIZE / 2)
    gHero = {
        location: {
            i: BOARD_SIZE - 2,
            j: middleLocationHero - 1
        },
        isShoot: true
    }
    board[BOARD_SIZE - 2][middleLocationHero - 1].gameObject = HERO
}

function moveTo(i, j) {
    if (!gGame.isOn) return
    if (j < 0 || j >= BOARD_SIZE) return
    gBoard[gHero.location.i][gHero.location.j].gameObject = null
    updateCell(gHero.location, '')
    gHero.location.i = i
    gHero.location.j = j
    gBoard[gHero.location.i][gHero.location.j].gameObject = HERO
    updateCell(gHero.location, HERO_IMG)  ///updetCell this is render cell !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

}

function onHandleKey(event) {
    const i = gHero.location.i
    const j = gHero.location.j
    switch (event.key) {
        case 'ArrowLeft':
            moveTo(i, j - 1)
            break
        case 'ArrowRight':
            moveTo(i, j + 1)
            break
    }
}

//pos is location

function blinkLaser(pos) {
    if (gHero.isShoot) updateCell(pos, LASER_IMG)
    else updateCell(pos, '')
}














//last update !!!!!!!!!!

