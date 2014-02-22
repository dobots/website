---
layout: post
title: Building a swarm bot
description: 
category: 
tags: []
---
{% include JB/setup %}

#  Building circuitry for a small robot swarm

The quest for a simple swarm has brought us 10 assembled Arexx frames (fig 1),

![arexx bare.jpg](\[$dl-reference=/groups/10157/portlets/20/file-entries/20697/1.0.xml$\])

fig 1

![](\[$dl-reference=/groups/10157/portlets/20/file-entries/20717/1.0.xml$\])![](\[$dl-reference=/groups/10157/portlets/20/file-entries/20749/1.0.xml$\])

fig 2             ;              ;              ;              ; fig 4

arduino’s (fig 2) and material to add some sensing abilities to each of them.
The basic idea is to provide inductive charging platforms to allow the bots to
charge their batteries. We have bought these game-controller battery packs
(fig 3) plus charger a number of times, including one of a different form just
for variety.

To control the movement of the bots we use this (fig 4)

![charging station.jpg](\[$dl-reference=/groups/10157/portlets/20/file-entries/20785/1.0.xml$\])

 fig 3

motor controller readily available as produced by Sparkfun. They handle both
DC motors and have a current handling capability of 1 A for each side, more
than enough for our bots, that do not typically exceed 70 mA while running.

To detect trouble it is useful to know if the motors are running smoothly or
are being blocked, or maybe running without any friction, as this can prompt
the bot to change its behaviour if the current strategy does not yield the
required result.

After surfing the web to learn which solutions are available to do this ([http://ww1.microchip.com/downloads/en/AppNotes/00894a.pdf](http://ww1.microchip.com/downloads/en/AppNotes/00894a.pdf)) the following circuit has emerged (fig 6) which primarily excells
at being very cheap with parts that everyone that has built any electronics
whatsoever probably already owns. If not, Velleman (a Begian firm) has a
standard set of parts  available in shops and on the internet.

The diagram is shown here:

![Motor operation sensor Swarmbot.pdf](\[$dl-reference=/groups/10157/portlets/20/file-entries/20807/1.0.xml$\])

 Here is a picture of the test setup 8-)

![test setup.jpg](\[$dl-reference=/groups/10157/portlets/20/file-entries/20845/1.0.xml$\])

As could be expected a circuit that simple did surprise us with a few quirks.
First of which was that the voltage drop observed in the testbed did not
manifest itself in the prototype. The swing, originally from 2.3 to 4.4 Volts,
only showed 3.1 to 4.3 Volts, with a lot of noise present in the sample data.

A little test with a potentiometer and a reference voltage showed very stable
results, so a more elaborate test setup was built including the motor
controller this time.

![](\[$dl-reference=/groups/10157/portlets/20/file-entries/20854/1.0.xml$\])

This diagram shows the results coming from the adc input of arduino, and the
noise is quite apparent. The lower generic level is measured when the one
motor is blocked.

Next week part 2.


