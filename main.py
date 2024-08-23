@namespace
class SpriteKind:
    Box = SpriteKind.create()

def on_player4_connected():
    global Players
    Players += 1
controller.player4.on_event(ControllerEvent.CONNECTED, on_player4_connected)

def on_player3_connected():
    global Players
    Players += 1
controller.player3.on_event(ControllerEvent.CONNECTED, on_player3_connected)

def on_player1_button_a_pressed():
    global Level, Instruction_Box
    if Players == 4 and Level == 0:
        Level = 1
        Instruction_Box = sprites.create(assets.image("""
            Instruction Box
        """), SpriteKind.Box)
        Instruction_Box.set_position(80, 22)
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_player2_connected():
    global Players
    Players += 1
controller.player2.on_event(ControllerEvent.CONNECTED, on_player2_connected)

Instruction_Box: Sprite = None
Players = 0
Level = 0
Level = 0
Players = 1
scene.set_background_image(assets.image("""
    Ocean
"""))