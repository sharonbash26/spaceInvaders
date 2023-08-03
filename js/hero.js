'use strict'

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
            gHero.isShoot = true
            shoot()
    }
}

//pos is location






































































































































































///old blink
function blinkLaser(pos) {
    console.log('pos', pos)
    if (gHero.isShoot) {
        updateCell(pos, LASER_IMG)
        gHero.isShoot = false
    }
    else {
        updateCell(pos, '')
        gHero.isShoot = true
    }
}






//new shoot
function shoot() {
    var res = isVictory()
    console.log('res', res)
    if (res) {
        clearInterval(gIdShootInterval)
        isVictory()
        return
    }
    var pos = { i: 0, j: 0 }
    pos.i = gHero.location.i - 1
    pos.j = gHero.location.j
    if (pos.i < 0) {
        gHero.isShoot = false
        clearInterval(gIdShootInterval)
        return
    }

    function shootingInterval() {
        blinkLaser(pos)
        pos.i = pos.i - 1

        if (pos.i < 0) {
            clearInterval(gIdShootInterval)
            gHero.isShoot = false
        }

        var hitLocation = { i: pos.i, j: pos.j }
        console.log('hitLocation', hitLocation)
        console.log('gameob', gBoard[hitLocation.i][hitLocation.j].gameObject)
        if (gBoard[hitLocation.i][hitLocation.j].gameObject === ALIEN) {
            updateCell(hitLocation, '')
            console.log('hit alien')
            gScore += 10
            updateScore(gScore)
            clearInterval(gIdShootInterval)
        }
    }
    gIdShootInterval = setInterval(shootingInterval, 100)
}










//old shoot 
// function shoot() {
//     gIsVictory = isVictory()
//     if (gIsVictory) {
//         clearInterval(gIdShootInterval)
//         isVictory()
//         return
//     }
//     var pos = { i: 0, j: 0 }
//     pos.i = gHero.location.i - 1
//     pos.j = gHero.location.j
//     console.log(pos.i)

//     pos.i = pos.i - 1
//     if (pos.i <0) {
//         clearInterval(gIdShootInterval)
//         gHero.isShoot = false
//         return
//     }

//     var hitLocation = { i: pos.i, j: pos.j }
//     console.log('hitLocation', hitLocation)
//     console.log('gameob', gBoard[hitLocation.i][hitLocation.j].gameObject)
//     if (gBoard[hitLocation.i][hitLocation.j].gameObject === ALIEN) {
//         console.log('hit alien')
//         gScore += 10
//         updateScore(gScore)
//         clearInterval(gIdShootInterval)
//     }

//     gIdShootInterval = setInterval(() => {
//         blinkLaser(pos)
//         pos.i = pos.i - 1
//     }, 100)
  
// }














//last update !!!!!!!!!!

