# Roux timer for Xiaomi smart cubes (and in theory Giiker I3SE too)
Solve timer for Roux method phases for Mi smart cube.

## Current state
The code is a mess :) As this is my first JS project, I started pulling togeter funcionality from different projects.

The main part is React from [wachino's repository](https://github.com/wachino/xiaomi-mi-smart-rubik-cube),
the timer is TypeScript from [https://github.com/cubing/timer](https://github.com/cubing/timer),
and the rest is plain javascript for now.

## running
Javascript: v12.16.1 (npm v6.14.4)

`make run-dev`: starts up parcel on [http://localhost:1234](http://localhost:1234)

`make deploy`:  deploys to github with gh-pages

Huge thanks to the following:
- https://github.com/cubing/ fot the timer, and everything twisty related stuff.
- https://github.com/wachino/xiaomi-mi-smart-rubik-cube for the basic connection and mapping
