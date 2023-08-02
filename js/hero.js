'use strict'

var gHero
const LASER_SPEED = 80
function createHero(board) {
    var middleLocationHero = Math.floor(BOARD_SIZE / 2)
    gHero = {
        location: {
            i: BOARD_SIZE - 2,
            j: middleLocationHero - 1
        },
        isShoot: true
    }
    board[gHero.location.i][gHero.location.j] = HERO
}

function moveHero(ev) {
    if (!gGame.isOn) return
    const nextLocation = getNextLocation(ev)
    if (!nextLocation) return
    if (nextLocation.j > 13 || nextLocation.j < 0) return
    gBoard[gHero.location.i][gHero.location.j] = EMPTY
    renderCell(gHero.location, EMPTY)
    gHero.location.i = nextLocation.i
    gHero.location.j = nextLocation.j
    gBoard[nextLocation.i][nextLocation.j] = HERO
    renderCell(gHero.location, HERO)

}

function getNextLocation(eventKeyboard) {
    const nextLocation = {
        i: gHero.location.i,
        j: gHero.location.j
    }
    switch (eventKeyboard.code) {
        case 'ArrowRight':
            nextLocation.j++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
    }
    return nextLocation
}


// Sets an interval for shutting (blinking) the laser up towards aliens
function shoot() { }
// renders a LASER at specific cell for short time and removes it

function blinkLaser(pos) {
    if (gHero.isShoot) updateCell(pos, LASER)
    //else updateCell(pos, HERO)
}