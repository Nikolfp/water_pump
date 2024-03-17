input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
