namespace SpriteKind {
    export const Box = SpriteKind.create()
}
controller.player4.onEvent(ControllerEvent.Connected, function () {
    Players += 1
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    Players += 1
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Players == 4 && Level == 0) {
        Level = 1
        Instruction_Box = sprites.create(assets.image`Instruction Box`, SpriteKind.Box)
        Instruction_Box.setPosition(80, 22)
        info.startCountdown(100)
        info.setScore(0)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Players += 1
})
let Instruction_Box: Sprite = null
let Players = 0
let Level = 0
Level = 0
Players = 1
scene.setBackgroundImage(assets.image`Ocean`)
game.setDialogTextColor(15)
game.setDialogCursor(assets.image`Test`)
game.setDialogFrame(assets.image`Instruction Box`)
game.showLongText("Hello", DialogLayout.Center)
game.onUpdate(function () {
	
})
