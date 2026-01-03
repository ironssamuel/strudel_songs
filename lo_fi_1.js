// A lo-fi sketch by Sam Irons

setcpm(70/4)
$: sound(`
[-  -  -  - ] [-  -  -  - ] [-  -  -  - ] [-  -  oh:1 - ],
[hh -  hh - ] [hh -  hh - ] [hh -  hh - ] [hh -  hh - ],
[-  -  -  - ] [cp -  -  - ] [-  -  -  - ] [cp -  -  - ],
[bd -  -  - ] [-  -  -  - ] [-  -  bd - ] [-  bd -  - ]
`)
  .bank("RolandTR808")
  .gain(rand.range(.8, .9))
  .room(.5)
  .delay(.1)
  .lpf(2000)

$: note(`<
[a, c, e, [g - e f]] 
[d, f, a, [c - - [e f]]] 
[g, b, d, [f - - [- b]]] 
[c, e, g, [b a]]
>`)
  .sound("piano")
  .gain(rand.range(.8, .9))
  .add(note(perlin.range(0,.2)))
  .clip(2)

$: note(`<
[a, c, e, g] 
[d, f, a, c] 
[g, b, d, f] 
[c, e, g, b]
>`)
  .sound("gm_pad_halo")
  .gain(sine.range(.4, .5))
  .add(note(perlin.range(0,.2)))
  .clip(2)

$: note (`<
[a1 [- a2] [a2 -] a1]
[d2 [- a2] [a2 -] d2]
[g2 [- d3] [d3 -] g2]
[c2 [- g2] [g2 -] c2]
>`)
  .sound("gm_electric_bass_finger")
  .gain(rand.range(.7, .8))
  .lpf(sine.range(200, 500))
  .add(note(perlin.range(0,.2)))

$: sound("<pink>/2").gain(.1)
$: sound("crackle").gain(1)