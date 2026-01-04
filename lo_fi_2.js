// Euclidean rhythyms lo-fi by Sam Irons

setcpm(70/4)

let drums = stack (
sound("bd(3,8)")
  .bank("RolandTR707")
  .gain(rand.range(.7, .8)),

sound("sd(4,8)")
  .bank("RolandTR707")
  .gain(rand.range(.7, .8)),

sound("rim(3,16)")
  .bank("RolandTR707")
  .every(4, x => x.fast(2))
  .gain(rand.range(.7, .8)),

sound("hh(4,16)")
  .bank("RolandTR707")
  .gain(rand.range(.7, .8))
).lpf(sine.range(500, 1000))

let chords = stack (
note (`<
    [d2, f3, a3, c3]
    [g, b, d, f]
    [c, e, g, b]
    [c3, e3, g3, c4]
    >`)
    .sound("piano")
    .gain(rand.range(.8, .9))
  ).add(note(perlin.range(0,.2)))
  .room(.5)
  .delay(.1)
  .clip(2)

let bass = stack (
note(`<
     [d2@2 d3 [e3 f3]] 
     [[g2@3 f2] [g3@3 f3]] 
     [e2 c3] [[c3@3 g2] 
     [c3@3 g2]]>`)
     .sound("gm_acoustic_bass")
).add(note(perlin.range(0,.2)))

$: stack (chords, bass, drums)
$: sound("<pink>/2").gain(.1)
$: sound("crackle").gain(1)