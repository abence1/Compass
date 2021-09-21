let fok = 0
basic.forever(function () {
    fok = input.compassHeading()
    if (fok < 45 && fok < 0 || fok < 360 && fok > 315) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    } else if (fok > 45 && fok < 135) {
        basic.showLeds(`
            . # . . #
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `)
    } else if (fok < 225 && fok > 135) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
    } else if (fok < 315 && fok > 225) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
