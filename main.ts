input.onButtonPressed(Button.A, function () {
    player.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    player.move(1)
})
input.onButtonPressed(Button.B, function () {
    player.turn(Direction.Right, 90)
})
input.onGesture(Gesture.Shake, function () {
    bullet = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    bullet.move(1)
    if (bullet.isTouchingEdge()) {
        bullet.delete()
    }
    if (zombie.isTouching(bullet)) {
        zombie.delete()
        bullet.delete()
    }
})
let bullet: game.LedSprite = null
let zombie: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 2)
zombie = game.createSprite(randint(1, 5), randint(1, 5))
basic.forever(function () {
    let level_1 = ""
    if (level_1 == "true") {
        if (zombie.isDeleted()) {
            zombie = game.createSprite(randint(1, 5), randint(1, 5))
        }
    }
})
