input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        images.createImage(`
            . . . . .
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            `).showImage(0)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    basic.showArrow(ArrowNames.North)
    basic.showString("scott land is this way")
    basic.showArrow(ArrowNames.North)
})
