setcpm(140/4)

let drums = stack (
  //kick
s("bd ~ [~ bd] ~")
  .gain(rand.range(0.6, 0.7))
  .compressor("-16:4:8:0.1:1")
  .shape("0.2:0.7")
  .duckorbit(2).duckattack(.2).duckdepth(.85)
  .pan(.5),
  //snare
s("~ ~ <sd sd*2> <~ [~ sd]>")
  .gain(rand.range(0.75, 0.9))
  .hpf(350)
  .room(.5).rsize(.5).orbit(3)
  .pan(.5),
  //closed hat
s("hh*8").gain(rand.range(0.3, 0.7))
  .gain(rand.range(0.55, 0.7))
  .hpf(6000)
  .lpf(sine.range(9000, 160000).slow(16))
  .pan(.6),
  //open hat
s("oh:2(3,8,2)")
  .gain(rand.range(0.35, 0.5))
  .hpf(6000)
  .lpf(9000)
  .pan(.4),
).bank("RhythmAce")
  .swingBy(1/8, 4)
  .crush(sine.range(4, 7).slow(16))
  .lpf(9000)
  .hpf(40)

let drone = n("-7 -5 -4 -3 -2 -1")
  .scale("A:dorian")
  .s("sawtooth")
  .gain(sine.range(0, .3).slow(16))
  .lpf(1000)
  .hpf(20)

let bass = n("1 1 - - 6 <3 5> 4 - 1 -4 <5 3> 4 - -2 - -1".sub(7))
  .slow(2)
  .scale("<A:minor A:minor B:minor B:minor E:major>".slow(2)) 
  .s("sine"
  .gain(rand.range(0.55, 0.7)))
  .shape("0.2:0.7")
  .duckorbit(5).duckattack(.2).duckdepth(.85)
  .gain(rand.range(0.8, 0.9))
  .lpf(5000)
  .hpf(80)
  .room(0.6).rsize(3).orbit(2)
  .swingBy(1/16, 4)

let chords = chord("Am7 Am69 Bm6 Bm7 E7")
  .voicing()
  .slow(4)
  .struct("x ~ ~ <~ x> ~ ~ <x ~ x> ~")
  .s("piano")
  .gain(rand.range(0.55, 0.7))
  .clip(rand.range(1, 2))
  .room(.5).rsize(2).roomlp(2500)
  .swingBy(1/8, 4). late(.01)
  .orbit(4)
  .speed(sine.range(.996, 1.004))
  .lpf(2800)

$: drums
$: bass
$: drone
$: chords
