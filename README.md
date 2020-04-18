# Minimal timer for Xiaomi smart cubes
Cube timer for Roux method with phase detection.
Works with  Mi smart cube (and in theory with Giiker I3SE).

## Current state
The code is a mess :) As this is my first JS project, I started pulling together functionality from other projects.

The base part is React from [wachino's repository](https://github.com/wachino/xiaomi-mi-smart-rubik-cube) (bt and mapping),
the timer is TypeScript from [https://github.com/cubing/timer](https://github.com/cubing/timer),
the cube display is custom code with three.js,
and the rest is plain javascript for now.

Roux phase detection:
- first and second block is detected for white/yellow on bottom (X-Y2 color neutral).
- CMLL is only detected if all 8 corners are in solved state (U face is aligned correctly)
- EO works
- EP needs no special detection

Timer is fairly accurate.

Movecount is under development. For now phases show the raw movecount which is accureate (every quarter face turn counts as 1).  
For now estimated movecount is based only the time difference between the current and last move with an 80 millisec threshold.  
This sort of works, but the jitter sometimes messes this up ( I was able to execute sexy move to count for only 2).

Move notation display is nonexistent for now.

## running
Javascript: v12.16.1 (npm v6.14.4)

`make run-dev`: starts up parcel on [http://localhost:1234](http://localhost:1234)

`make deploy`:  deploys to github with gh-pages

Huge thanks to the following:
- https://github.com/cubing/ fot the timer, and everything twisty related stuff.
- https://github.com/wachino/xiaomi-mi-smart-rubik-cube for the basic connection and mapping
