setcpm(80/4)


let drums = stack(
s("[bd <hh oh>!2]*2").gain(rand.range(0.3, 0.7)),
n("~ 3 [0 4]*2").s("sd").gain(rand.range(0.3, 0.7))
)
  .bank("RolandTR707")
  .lpf(2000)
  .dist(2)
  .gain(0.2)
a
let bass = note(`<
[ [f1] [g2 -] [a2 -] [g2 -] ]
[ [g1] [g2 -] [a2 -] [g2 -] ]
[ [a1]@2 [a1] [a1]!3 ]
[ [g1]@2 [g1] [b1 d2] ]
>`)
  .sound("gm_electric_bass_finger")

let chords = note(`<
< [ f3, a3, c3, e4 ] [ f3, a3, e4, g4, d5 ] >
< [ g3, b4, f4, e4, a4 ] [ g3, b3, d4, f4 ] [ g3, b4, f4, e4, a4 ] >
< [ a3, c4, g4, b4, g5 ] [ a3, c4, e4, g5 ] >
[ g3, b3, d4, f4 ]
>`)
  .s("piano")
  .gain(rand.range(0.5, 0.8))

let pads = note(`<
[ f3, a3, c3, <e4 e5> ]
[ g3, b3, d4, <a4 d5> ]
[ a3, c4, e4, <g4 g5 g4> ]
[ g3, b3, d4, <f5 f4> ]
>`)
  .sound("gm_pad_halo")
  .gain(sine.range(0.2, 0.5))

$: drums
$: bass
$: chords
$: pads

$: sound("<pink>/4").gain(0.1)
$: sound("crackle").gain(0.1)
