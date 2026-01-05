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
  .every(3, x => x.fast(2))
  .gain(rand.range(.7, .8)),

sound("hh(4,16)")
  .bank("RolandTR707")
  .gain(rand.range(.7, .8))
).lpf(sine.range(500, 1000))

let chords = note (`<
  [d2, c3, f3, b3, e4]
  [g3, f4, a4, b4, e5]
  [c3, b3, d4, e4, a4]
  [c3, b3, e4, a4, d5]
  >`)
  .sound("piano")
  .gain(rand.range(.8, .9))
  .add(note(perlin.range(0,.2)))
  .room(.5)
  .delay(.1)
  .clip(2)

let bass = note(`<
  [d2@2 d3 [e3 f3]] 
  [[g2@3 f2] [g3@3 f3]] 
  [e2 c3] [[c3@3 g2] 
  [c3@3 g2]]>`)
  .sound("gm_acoustic_bass")
  .add(note(perlin.range(0,.2)))
  .cutoff(sine.segment(4).range(200,800))

let sub = note("[d2 g1 c2 c2]/4")
  .sound(sine)
  .lpf(sine.range(850, 1500))
  .cutoff(sine.segment(4).range(200,800))

let intro = sound(stack (chords, drums))
let verse = stack (chords, bass, drums)
let bridge = stack (bass, drums)
let chorus = stack (chords, bass, sub, drums)

$: chorus
$: sound("<pink>/2").gain(.1)
$: sound("crackle").gain(.1)