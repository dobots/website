---
layout: post
title: "Human SLAM, Indoor localization using particle filters"
description: "Solving the indoor localization problem using an adapted version of FastSLAM and partilcle filters."
tags: [crownstone, indoor localization, particle filters, slam ]
author: wouterbulten
---
{% include JB/setup %}

## Human SLAM, Indoor localization using particle filters

A key problem (or challenge) within smart spaces is indoor localization: making estimates of users’ whereabouts. Without such information, systems are unable to react on the presence of users or, sometimes even more important, their absence. This can range from simply turning the lights on when someone enters a room to customizing the way devices interact with a specific user.

Even more important for a system to know where users exactly are, is to know where users are relative to the devices it can control or use to sense the environment. This relation between user and device location is an essential input to these systems. A central question in this field is therefore:

> What are the locations of devices in a smart space and what are the current locations of users relative to these devices?

![SLAC project overview]({{ site.url }}/attachments/slac_project_overview.png "SLAC project overview")

During my graduation project at DoBots I worked on an algorithm, called SLAC : Simultaneous Localization and Configuration, to solve this double localization problem: finding position of users and devices simultaneously.  With SLAC we aimed to simultaneously locate both the user and the devices of a system deployed in an indoor environment. To accomplish this goal we use characteristics that are already available in many smart spaces: signal strength measurements (or RSSI) from devices and motion data from smart phones and other portable device. These two inputs are combined in a system that can locate users and devices, respect individual users’ privacy and perform all estimations in real time. SLAC is based on a common technique from robotics, simultaneous localization and mapping (SLAM), and in particular the FastSLAM algorithm[^1].

### Algorithm overview

![SLAC algorithm]({{ site.url }}/attachments/slac_algorithm.svg "SLAC algorithm")

### Implementation

SLAC has been fully implemented in Javascript and more specifically using the EC- MAScript version 6/2015 standard. Javascript has been chosen to support a large range of devices on which the algorithm can run; this includes web browsers and mobile phones. The [Apache Cordova platform](https://cordova.apache.org) was used to access native API’s of mobile devices such as the Bluetooth radio and the motion sensors.

![Screenshots of application]({{ site.url }}/attachments/slac_devices_example.png "Screenshots of application")

### Results

The SLAC system was first evaluated using simulations; this granted the opportunity to repeat the experiment and control the environment. In the simulation we emulated the world by building an environment of similar dimensions as one of our real world test beds. In this simulated environment we let a user walk a fixed path and run the SLAC algorithm on every step.

We varied the number of RSSI updates each landmark broadcasts between each consecutive algorithm step. As the signal strength is used to make range estimates the number of received messages could have an effect on the overall performance. The different settings are: 1, 2, 5, 10, 25, 50 and 100 updates per step. The results are shown in the figure below:

![Results of and simulations]({{ site.url }}/attachments/slac_rssi_step.png "Results of simulations")

We found that the number of RSSI updates per algorithm step has a very high effect on the performance of the system. This follows directly from our system: given more information the Kalman filter responsible for filtering the raw RSSI signal will be able to give a less noisy estimate of the current distance to a beacon. These distance estimates are vital in updating landmark positions and weighing particles. While the effect of the number of RSSI updates is high, this effect eventually wears out. Given enough measurements the noise will eventually be filtered out and more measurements will not improve the distance estimate.

Simulating RSSI values and movement has its drawbacks: noise is predictable and there is less interference from events in the environment. In general it is hard to fully simulate all the factors of a real world environment. In order to asses the performance of the algorithm outside a simulated world, we also tested the algorithm in the wild at the DoBots building.

While SLAC runs online and in real time the data for this live test has been recorded and analyzed offline at a later stage. The algorithm did however run during the data collection to give feedback about the process. Each recorded data set consists of the raw unprocessed and unfiltered motion data (i.e. acceleration and heading) and RSSI measurements. Each data point has a timestamp which is used to play back that particular measurement at the correct time. These datasets are played back several times to get an average performance. This is particular important as the algorithm is a random process: using the same input data twice will result in different outcomes.

The results of our live tests are shown in the figure below (A_1 to A_5). Additionally, the simulations results of the two conditions that are comparable to a real world setup are displayed as a refference.

![Results of live tests and simulations]({{ site.url }}/attachments/slac_almende_results.png "Results of live tests and simulations")

### Demo

A video of a simulation of the algorithm can be seen in the video below. A user is walking inside a building/smart space filled with devices. The blue line describes the ground truth of the user's path. The green line is the current best estimate of this path. Devices are displayed using squares, where their true positions are displayed in black and estimates in red.

{% youtube NzOi9uYiAOw %}

### Code

The full source code is available online on [GitHub](https://github.com/wouterbulten/slacjs) and is licensed under the GNU Lesser General Public License.

### References

[^1]: Michael Montemerlo, Sebastian Thrun, Daphne Koller, and Ben Wegbreit. FastSLAM: A factored solution to the simultaneous localization and mapping problem. Proc. of 8th National Conference on Artificial Intelligence/14th Conference on Innovative Applications of Artificial Intelligence, 68(2):593–598, 2002.
