setcpm(80/4)

let drums = stack (
  s("bd(3,8,3)").gain(rand.range(.5, 1)),
  s("sd(2,8,2)").gain(rand.range(.5, .85)),
  s("rim(5,16,3)").gain(rand.range(.4, .9)),
  s("hh(12,16,5)").gain(rand.range(.3, .7))
).bank("RolandTR909")

let sub = note(`<
[e1] 
[a1] 
[d1] 
[g1]
>`)
  .s("sine")
  .lpf(sine.range(850, 1500))
  .cutoff(sine.segment(4).range(200,800))

let bass = note(`<
[e2 g2 b2 d3]
[a2 c3 e3 g3]
[d2 f2 a2 c3]
[g2 b2 d3 g3]
>`)
  .euclid(5,8)
  .s("gm_acoustic_bass")
  .add(note(perlin.range(0,.2)))
  .cutoff(sine.segment(4).range(200,800))

let bassR = note(`<
[c2 e2 g2 b3]
>`)
  .euclid(5,8)
  .s("gm_acoustic_bass")
  .add(note(perlin.range(0,.2)))
  .cutoff(sine.segment(4).range(200,800))

let chords = note(`<
[e2, g2, b2, d3]
[a2, c3, e3, g3]
[d2, f2, a2, c3]
[g2, b2, d3, g3]
>`)
  .euclid(3,5)
  .s("piano")
  .gain(rand.range(0.4, 0.6))

let chordsR = note(`<
[c2, e2, g2, b3]
>`)
  .euclid(3,5)
  .s("piano")
  .gain(rand.range(0.4, 0.6))

$: drums
$: sub
$: bass
$: chords

$: sound("<pink>/4").gain(.1)
$: sound("crackle").gain(.1)
