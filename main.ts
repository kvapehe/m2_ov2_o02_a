input.onButtonPressed(Button.A, function () {
    teller01 = teller01 + 1
    teller01 = teller01 % roter_rull_teller
    basic.showNumber(teller01)
})
input.onButtonPressed(Button.AB, function () {
    tallet = parseFloat(telletekst)
    spilfrekvenstallet = 0
    spillfrekvenstallet2 = 1
    spilfrekvenstallet = Math.map(tallet, -200, 8000, 50, 4000)
    basic.showNumber(tallet)
    basic.showNumber(spilfrekvenstallet)
    basic.showString(".." + ".")
    for (let index = 0; index < 50; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(spillfrekvenstallet2, music.beat(BeatFraction.Sixteenth))
        }
        spillfrekvenstallet2 += 2
        music.rest(music.beat(BeatFraction.Quarter))
    }
    music.playTone(spilfrekvenstallet, music.beat(BeatFraction.Breve))
    music.playTone(spilfrekvenstallet, music.beat(BeatFraction.Quarter))
    basic.showNumber(spilfrekvenstallet)
})
input.onButtonPressed(Button.B, function () {
    telletekst = "" + telletekst + convertToText(teller01)
    basic.showNumber(teller01)
    basic.showString("T")
    basic.showString("" + telletekst + ".")
    teller01 = 0
    basic.showNumber(teller01)
})
input.onGesture(Gesture.Shake, function () {
    telletekst = ""
    teller01 = 0
    basic.showNumber(teller01)
})
// Med Mbit 2 kan en klikke på logene for mer info.
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Txt")
    basic.showString(telletekst)
    basic.showString("Nr")
    basic.showNumber(parseFloat(telletekst))
    tallet = parseFloat(telletekst)
})
let spillfrekvenstallet2 = 0
let spilfrekvenstallet = 0
let tallet = 0
let roter_rull_teller = 0
let teller01 = 0
let telletekst = ""
let mintalltilfrek = -20
let maxtalltilfrek = 8000
telletekst = "Rist starter. A legger inn tall. B neste siffer A+B beregner."
teller01 = 0
roter_rull_teller = 10
// Plasser under show om en vil se info-melding
telletekst = ""
basic.showString(telletekst)
basic.forever(function () {
	
})
