// @title sketch 2
// @by sirons <https://samirons.me>
// @license CC BY-NC-SA

setcpm(130/4)

// --- CONSTANTS
const key = "<C:major!2 D:minor G:major>"

// --- DRUMS
const kick = s("<[bad(3,8)][~]>").bank("RolandTR808")
  .hpf(25)
  .lpf(18000)
  .velocity(rand.range(0.9, 1))
  .room(.2)
  .delay(.03)
  .dist(2)
  .gain(.9)

const snare = stack (
  s("<[~][sd(2,8,2)]>").every(4, x=>x.rev()).bank("RolandTR808")
  .velocity(rand.range(0.8, .9)),
  s("[~] [sd] [~] [~]").bank("RolandTR808").slow(2)
  .velocity(rand.range(0.8, .9))
)
  .room(.2)
  .delay(.03)
  .dist(2)
  .compressor("-5:5:6:.002:.05")

const hats = s("hh oh hh hh oh hh hh oh").bank("RolandTR808")
  .every(3, x=>x.rev())
  .velocity(rand.range(0.6, .75))
  .lpf(sine.range(1000, 3000).fast(8))
  .pan(0.25)
  .swingBy(0.5, 16)
  .room(.2)
  .delay(.03)
  .dist(2)
  .compressor("-5:5:6:.002:.05")

// ---LEAD
const lead = note("<[0!2 -!5 1 2 -!3 -4@2 -!2] [ 5@4 4@4 ]>")
  .scale(key)
  .s("sine")
  .hurry(.5)
  .velocity(rand.range(0.8,1))
  .swingBy(0.5, 16)
  .distort(saw.range(4,5).fast(4))
  .room(.5).lfo()
  .hpf(1200).lfo()
  .lpf(2000).lfo()
  .chorus(.5)
  .attack(saw.range(0.1, 0.2).slow(2))
  .compressor("-20:10:20:.002:.03")
  .postgain(sine.range(1, 1.2).fast(32))

// --- BASS
// [0 -1 0 - - - - -1][0][0 1 0 - - - - 0][0 -4]
// <[0 0@6 -!2 2@2 4@3 -5@2]>
const bass = note("<[0 -3 0 0 - - - -1]!3 [0!3 -5]>")
.scale(key)
.scaleTranspose("-7")
.slow(2)
.s("gm_acoustic_bass")
.dist(1)
.velocity(rand.range(.75, .9))
.swingBy(0.5, 16)
.room(.2)
.chorus(.3)
.postgain(0.6)

// ---SUB
const sub = note("<[C2@15 -] [C2@15 -] [D2@15 -] [G2 G1]>")
  .slow(2)
  .s(sine.range(850, 1500))
  .attack(.03)
  .release(0.3)
  .postgain(0.8)

// ---PADS
const chords = chord("<C@2 Dm G>")
  .voicing()
  .struct("<[x][x@15 -!1][x@13 -!2]>")
  .s("supersaw")
  .hurry(.5)
  .lpf(2000)
  .hpf(1000)
  .room(.3)
  .release(sine.range(0.6, 0.8))
  .attack(rand.range(1.5, 2.5))
  .gain(sine.range(0.3, 0.5).slow(8))
  .pan(sine.range(0.3,0.7).fast(2))
  .postgain(.4)

// ---ARPS
const arp = note("<[0, 2, 4, <6, 7>]>")
  .arp("[0 [0,2] 1 [1,3]]!4").slow(2)
  .scale(key).slow(2)
  .scaleTranspose("7")
  .s("gm_music_box")
  .hpf(1000)
  .lpf(1000)
  .room(.5)
  .delay(.5)
  .pan(rand.range(0.25, .75))
  .postgain(1.5)

// ---PLAYBACK AND MASTER FX

// $: stack(kick, snare, lead, bass)

$: arrange (
  [4, stack(kick, hats)],
  [8, stack(kick, snare, lead)],
  [8, stack(kick, snare, hats, lead, bass)],
  [4, stack(kick, snare, bass, arp)],
  [8, stack(kick, snare, lead, sub)],
  [8, stack(kick, hats, sub, arp)],
  [8, stack(kick, snare, hats, lead, bass, sub, arp, chords)],
  [8, stack(kick, snare, hats, bass, arp, chords)],
  [8, stack(kick, snare, hats, lead, bass, sub, arp, chords)],
  [4, stack(kick, snare, sub, arp)],
  [4, stack(kick, snare, hats)]
  
)
  .room(.2)
  .postgain(.3)
  ._spectrum()

$: sound("<pink>/4").gain(0.03)
$: sound("crackle").gain(0.1)
