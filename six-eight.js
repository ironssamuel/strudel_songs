// TEMPO (6/8 feel)

setcpm(100/2)

// INSTRUMENT PATTERNS

let drums = stack(
  s(`<
    [bd - - sd - bd]
    [bd bd - sd - bd]
    [bd bd bd sd - bd]
    [bd bd - sd bd bd]
    [bd bd - sd - bd]
    [bd - - sd - bd]
    [bd - bd sd - bd]
    [bd - - sd bd bd]
    >`).gain(rand.range(0.5, 0.9))
    .pan(.55),
  s(`<
  [hh hh hh hh hh hh]
  [hh hh hh - hh hh]
  [- hh hh - hh hh]
  [- hh hh hh hh hh]
  >`).gain(rand.range(0.3, 0.7)).pan(.45)
).bank("RolandTR707")
.lpf(2000)


let bass = note(`<
[a2 a2 ~ a2 ~ a2]
[a2@3 c3@3]
[a2 a2 ~ a2 ~ a2]
[g2@2 e2 g2 g2 e2]
>`).sound("gm_acoustic_bass")
  .gain(rand.range(0.6, 0.9))
  .add(note(perlin.range(0,.2)))
  .cutoff(sine.segment(4).range(200,800))
  .pan(.25)

let sub = note(`<
[a1@2 ~ a1@3]
[a1@2 ~ a1@3]
[a1@2 ~ a1@3]
[g1@2 ~ g1@3]
>`).s("sine")
  .lpf(sine.range(850, 1500))

let arp = note(`<
[a2 c3 g3 b3 f4 b3]
[a3 c3 g3 b2 f3 b2]
[a2 c3 g3 b3 f4 b3]
[g3 b2 d3 gb3 a2 e2]
>`).s("gm_kalimba")
  .gain(rand.range(0.5, 0.7))
  .pan(sine.range(0.25, 0.75))

let pad = note(`[a4, c5, e5, g5]`).s("gm_pad_halo")
  .gain(0.1)
  .pan(.75)

// ARRANGEMENT

const i = drums
const ii = stack(drums, bass)
const iii  = stack(drums, bass, arp)
const iv  = stack(drums, bass, arp, pad)
const v = stack(drums, bass, sub, arp, pad)
const vi = stack(bass, sub, arp, pad)
const vii = stack(bass, arp, pad)
const viii = stack(drums, bass, sub)
const vix = stack(drums, arp, pad)

// MASTER TRACK EFFECTS

$: v

$: sound("<pink>/4").gain(0.1)
$: sound("crackle").gain(0.1)
