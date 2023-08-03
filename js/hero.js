'use strict'

var gHero
const LASER_SPEED = 80
const HERO = 'HERO'
const HERO_IMG = '🐱‍👤'

var gScore = 0
var gIdShootInterval = 0
var gPos = { i: 0, j: 0 }

function createHero(board) {
    var middleLocationHero = Math.floor(BOARD_SIZE / 2)
    gHero = {
        location: {
            i: BOARD_SIZE - 2,
            j: middleLocationHero - 1
        },
        isShoot: false
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
    if (!gGame.isOn) return
    const i = gHero.location.i
    const j = gHero.location.j
    console.log('event', event.key)
    switch (event.key) {

        case 'ArrowLeft':
            console.log('i event', i)
            console.log('j event', j)
            moveTo(i, j - 1)
            break
        case 'ArrowRight':
            moveTo(i, j + 1)
            break
        case ' ':
            shoot()
    }
}


function shoot() {
    if (gHero.isShoot) return
    gHero.isShoot = true
    gPos.i = gHero.location.i - 1
    gPos.j = gHero.location.j
    gIdShootInterval = setInterval(blinkLaser, 80)

}

function blinkLaser(pos) {
    if (!gHero.isShoot) return
    if (gPos.i < 0) {
        //updatecell
        clearInterval(gIdShootInterval)
        gHero.isShoot=false
        return
    }
    if(gBoard[gPos.i][gPos.j].gameObject===ALIEN){
        updateCell(gPos, '')
        updateCell(gPos, LASER_IMG)
        gScore += 10
        gCountAliens--
        updateScore(gScore)
        if(gCountAliens===0) isVictory()
        console.log('gcountAliens',gCountAliens)
        clearInterval(gIdShootInterval)
        gHero.isShoot=false
        return
    }
        updateCell(gPos, LASER_IMG)
        setTimeout(() => {
            if (gBoard[gPos.i][gPos.j].gameObject === '❗') updateCell(gPos, '')  
            gPos.i = gPos.i - 1
        }, 500);
}

////2:52 4.8-backup !!!!!!!!