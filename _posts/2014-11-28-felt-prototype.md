---
layout: post
title: "Felt prototype"
description: "The first prototype of the Felt"
category: 
tags: [BLE, IoT]
author: bartvanvliet
---
{% include JB/setup %}

# Felt

The name "Felt" is a literal translation of the Dutch word "vilt", which is what we call chair glides: the things that prevent the chair from scratching the floor.
We figured it would be nice to give the chair glides some weighing functionality, so that you can detect if someone is sitting on the chair. This can come in handy to see if elderly people are not sitting in a chair when they normally are; an indication that something might be wrong. It's not as intrusive as carrying an accelerometer with you all day for example.


## Hardware
![Voltage divider]({{ site.url }}/attachments/felt_circuit.png){: .float-right}
For the first prototype I used an [rfd module](http://www.rfduino.com/product/rfd22301-rfduino-ble-smt/), since we were [already programming]({{ site.url }}/2014/03/05/rfduino-without-rfduino-code/) those. Next, I added a thin [force sensor](https://www.sparkfun.com/products/11207) and connected that via a voltage divider to the rfd module.
To keep the prototype a bit small, we used paper with a [silver ink marker](http://agic.cc/) to connect to the battery. The casing is 3D printed and should provide enough protection for the electronics not to be sqeezed.

## Code
I slightly modified the code we had for the [crownstone](http://dobots.nl/products/crownstone.html), such that it samples the voltage over the pressure sensor on request and puts the result in another characteristic. The code can be found [here](https://github.com/vliedel/bluenet/tree/vilt).

![Felt prototype]({{ site.url }}/attachments/felt_prototype_1.jpg){: style="width: 280px"}
![Felt prototype]({{ site.url }}/attachments/felt_prototype_2.jpg){: style="width: 280px"}
