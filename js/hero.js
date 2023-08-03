'use strict'
//sharon  sharon sharon last update !!!!!!!!!!!!!!!!!!!!!
var gHero
const LASER_SPEED = 80
const HERO = 'HERO'
const HERO_IMG = '🐱‍👤'

var gScore = 0
var gIdShootInterval = 0

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
    console.log('event',event.key)
    switch (event.key) {
        
        case 'ArrowLeft':
            console.log('i event',i)
            console.log('j event',j)
            moveTo(i, j - 1)
            break
        case 'ArrowRight':
            moveTo(i, j + 1)
            break
        case ' ':
            console.log('shoot')
            shoot()
    }
}

//pos is location

function blinkLaser(pos) {
    console.log('pos', pos)
    if (gHero.isShoot) updateCell(pos, LASER_IMG)
    else updateCell(pos, '')
}


function shoot() {
    if (!gHero.isShoot) retrun
    var pos ={i:0,j:0}
    pos.i =gHero.location.i-1
    pos.j=gHero.location.j
    if (pos.i < 0) {
        clearInterval(gIdShootInterval)
        return
    }
    console.log(pos.i)
    gIsVictory = isVictory()
    if (gIsVictory) return
    gIdShootInterval = setInterval(blinkLaser(pos), 100)
    var hitLocation = { i: pos.i, j: gHero.location.j }

    if (gBoard[hitLocation.i][hitLocation.j] === ALIEN) {
        console.log('hit alien')
        gScore += 10
        updateScore(gScore)
        clearInterval(gIdShootInterval)
    }else{
        pos.i--
    }

}














//last update !!!!!!!!!!

