---
layout: post
title: "Human SLAM, Indoor localization using particle filters"
description: "Solving the indoor localization problem using an adapted version of FastSLAM and partilcle filters."
tags: [crownstone, indoor localization, particle filters, slam ]
author: wouterbulten
---
{% include JB/setup %}

# Human SLAM, Indoor localization using particle filters

A key problem (or challenge) within smart spaces is indoor localization: making estimates of users’ whereabouts. Without such information, systems are unable to react on the presence of users or, sometimes even more important, their absence. This can range from simply turning the lights on when someone enters a room to customizing the way devices interact with a specific user.

Even more important for a system to know where users exactly are, is to know where users are relative to the devices it can control or use to sense the environment. This relation between user and device location is an essential input to these systems. A central question in this field is therefore:

> What are the locations of devices in a smart space and what are the current locations of users relative to these devices?

![SLAC project overview]({{ site.url }}/attachments/slac_project_overview.png "SLAC project overview")

During my graduation project at DoBots I worked on an algorithm, called SLAC : Simultaneous Localization and Configuration, to solve this double localization problem: finding position of users and devices simultaneously.  With SLAC we aimed to simultaneously locate both the user and the devices of a system deployed in an indoor environment. To accomplish this goal we use characteristics that are already available in many smart spaces: signal strength measurements (or RSSI) from devices and motion data from smart phones and other portable device. These two inputs are combined in a system that can locate users and devices, respect individual users’ privacy and perform all estimations in real time. SLAC is based on a common technique from robotics, simultaneous localization and mapping (SLAM), and in particular the FastSLAM algorithm[^1].

## Algorithm overview

![SLAC algorithm]({{ site.url }}/attachments/slac_algorithm.svg "SLAC algorithm")

## Implementation

![Screenshots of application]({{ site.url }}/attachments/slac_devices_example.png "Screenshots of application")

## Results

![Results of live tests and simulations]({{ site.url }}/attachments/slac_almende_results.png "Results of live tests and simulations")

## Demo

A video of a simulation of the algorithm can be seen in the video below. A user is walking inside a building/smart space filled with devices. The blue line describes the ground truth of the user's path. The green line is the current best estimate of this path. Devices are displayed using squares, where their true positions are displayed in black and their estimates in red.

{% youtube NzOi9uYiAOw %}

## Code

The full source code is available online on [GitHub](https://github.com/wouterbulten/slacjs) and is licensed under the GNU Lesser General Public License.

## References

[^1]: Michael Montemerlo, Sebastian Thrun, Daphne Koller, and Ben Wegbreit. FastSLAM: A factored solution to the simultaneous localization and mapping problem. Proc. of 8th National Conference on Artificial Intelligence/14th Conference on Innovative Applications of Artificial Intelligence, 68(2):593–598, 2002.
