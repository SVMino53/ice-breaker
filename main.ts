namespace SpriteKind {
    export const Box = SpriteKind.create()
}
scene.setBackgroundImage(assets.image`Ocean`)
let Instruction_Box = sprites.create(assets.image`Instruction Box`, SpriteKind.Box)
Instruction_Box.setPosition(80, 22)
