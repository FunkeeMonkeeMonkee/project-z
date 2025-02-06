namespace SpriteKind {
    export const Pistol = SpriteKind.create()
    export const ShotGun = SpriteKind.create()
    export const Saw = SpriteKind.create()
    export const RATATATATA = SpriteKind.create()
    export const decor = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RATATATATA, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprite.setImage(img`
        .........................
        .........................
        .bbbbb...................
        b.....b..................
        b.....b..................
        b.....b..................
        bf....ff.................
        .fbbbb.ff................
        .fffffbff..f...f...f.....
        bbbfffbff11f111f111f1....
        ..fffffffbbfbbbfbbbfb....
        ..fffffff11f111f111f1....
        ..b.b....................
        ..b.b....................
        ..b.b....................
        .........................
        `)
    Equipped += 3
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    movingUP = true
    move_forward()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Equipped == 1) {
        BBbullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, aim, 100, 0)
    } else {
        if (Equipped == 2) {
            for (let index = 0; index < 4; index++) {
                BBbullet = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, aim, 100, randint(-50, 50))
            }
            pause(1000)
        } else {
            if (Equipped == 3) {
                BBbullet = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, aim, 100, randint(-50, 50))
                pause(1000)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ShotGun, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . . f f f f f b . . . . . . b 
        . . . . . f b b b 1 1 1 1 1 1 1 
        . . e e e e e b b e e e . . . . 
        . . e e e e . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Equipped += 2
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    aim.setVelocity(0, 0)
    movingDOWN = false
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    transformSprites.changeRotation(aim, 3)
    rotation += 1
    move_forward()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pistol, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . . f f f f f . f f f f f 4 . 
        . . . . . f . . . f f f f f . . 
        . . . . f f f f f f f 1 . . . . 
        . . . f . f . . . f f . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Equipped += 1
})
function make_trees () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tree = sprites.create(img`
            ................86..................
            ...............8678.................
            ..............687768................
            .............68777767...............
            ............6677777766..............
            ...........677777777786.............
            ..........77666776766686............
            ..........86666766767768............
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........88888886888888.868..........
            ..............e88e88...88...........
            ...............eeee.................
            ...............ceef.................
            ...............ceef.................
            ...............feef.................
            ...............fcee.................
            ...............ffce.................
            `, SpriteKind.decor)
        tree.setScale(1.5, ScaleAnchor.Top)
        tiles.placeOnTile(tree, value)
        tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (Melee == 1) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Saw, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f . . . . . . . . . . 
        f . . . . . f . . . . . . . . . 
        f . . . . . f . . . . . . . . . 
        f . . . . . f . . . . . . . . . 
        f . . . . . f . . f . . . . . . 
        . f f f f f . . f f . . . . . . 
        . . . f f 2 2 . f 2 . b . b . b 
        . . . f . 2 f 2 2 2 1 1 1 1 1 . 
        . . . f f f 2 2 2 2 1 1 1 1 1 b 
        . . . f . . 2 2 2 2 1 1 1 1 1 . 
        . . f . f . . . . . . b . b . b 
        . . f . f . . . . . . . . . . . 
        . . f . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Melee += 1
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    aim.setVelocity(0, 0)
    movingUP = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    movingDOWN = true
    move_forward()
})
function move_forward () {
    thrustdir = transformSprites.getRotation(aim) - 90
    thrustDirRads = thrustdir * 3.1416 / 180
    thrustX = THRUSTER_VELOCITY * Math.cos(thrustDirRads)
    thrustY = THRUSTER_VELOCITY * Math.sin(thrustDirRads)
    if (movingUP == true) {
        aim.vx = thrustX
        aim.vy = thrustY
    } else if (movingDOWN == true) {
        aim.vx = thrustX * -1
        aim.vy = thrustY * -1
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    transformSprites.changeRotation(aim, -3)
    rotation += -1
    move_forward()
})
let Zombie: Sprite = null
let thrustY = 0
let thrustX = 0
let thrustDirRads = 0
let thrustdir = 0
let tree: Sprite = null
let rotation = 0
let movingDOWN = false
let BBbullet: Sprite = null
let movingUP = false
let THRUSTER_VELOCITY = 0
let Melee = 0
let Equipped = 0
let aim: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let ROTATION_CHANGE = 0
aim = sprites.create(img`
    .................................
    ................2................
    ................2................
    ................1................
    ............222111222............
    ................1................
    ................2................
    ................2................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    `, SpriteKind.Player)
scene.cameraFollowSprite(aim)
let BBpistol = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f 4 . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f 1 . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Pistol)
BBpistol.setPosition(79, 22)
let BBShotgun = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b . . . . . . b . 
    . . . . . b b b 1 1 1 1 1 1 1 . 
    . e e e e e b b e e e . . . . . 
    . e e e e . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.ShotGun)
BBShotgun.setPosition(29, 22)
Equipped = 0
let Chainsaw = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . . . . f . f . . . . 
    . . . . . . . . . 2 2 f . 2 2 . 
    b . b . b . b . b 2 2 2 . 2 2 . 
    . 1 1 1 1 1 1 1 1 2 2 2 2 2 2 . 
    b 1 1 1 1 1 1 1 1 2 2 2 2 2 2 . 
    . 1 1 1 1 1 1 1 1 2 2 2 2 2 . . 
    b . b . b . b . b 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Saw)
Chainsaw.setPosition(29, 97)
Melee = 0
let MINIGUN = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    f....ff.............
    f.....ff............
    ffffffff..f...f...f.
    ffffffff11f111f111f1
    .fffffffbbfbbbfbbbfb
    .fffffff11f111f111f1
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.RATATATATA)
MINIGUN.setPosition(69, 100)
THRUSTER_VELOCITY = 30
make_trees()
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(25)) {
        Zombie = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 . . . . . 7 . . . . . 
            . . . . 7 . . . . . 7 . . . . . 
            . . . . 7 . . . . . 7 . . . . . 
            . . . . 7 . . . . . 7 . . . . . 
            . . 7 7 7 7 7 7 7 7 . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . 7 7 7 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 7 . 7 . . . . . . . 
            . . . . . . 7 . 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        Zombie.setPosition(randint(aim.x - 80, aim.x + 80), randint(aim.y - 80, aim.y + 80))
        Zombie.follow(aim, 10)
    }
})
