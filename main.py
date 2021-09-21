fok = 0

def on_forever():
    global fok
    fok = input.compass_heading()
    if fok < 45 and fok > 315:
        basic.show_leds("""
            # # # . .
                        # . . . .
                        # # . . .
                        # . . . .
                        # # # . .
        """)
    elif fok > 45 and fok < 135:
        basic.show_leds("""
            . # . . #
                        . # . # .
                        . # # . .
                        . # . # .
                        . # . . #
        """)
    elif fok < 225 and fok > 135:
        basic.show_leds("""
            # # # . .
                        # . . # .
                        # . . # .
                        # . . # .
                        # # # . .
        """)
    elif fok < 315 and fok > 225:
        basic.show_leds("""
            # . . . #
                        # # . . #
                        # . # . #
                        # . . # #
                        # . . . #
        """)
basic.forever(on_forever)
