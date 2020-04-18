let singleMoves = ["L", "L'", "R", "R'", "U", "U'", "D", "D'", "F", "F'", "B", "B'"];
let sliceMoves = ["M", "M'", "E", "E'", "S", "S'"];

/* index transitions of single moves
  base moves are calciulated on the reference orientation (white on top, green in front)
  base' moves have the same transitions as base moves, just in the opposite direction, 
  so if the state transition from current state to previous state is equal to a base move,
  then it is a base' move

  prev -> current
  U = 
  white center:
  49 -> 49,
  white corners:
  45 -> 47 -> 53 -> 51 -> 45
  white edges:
  46 -> 50 -> 52 -> 48 -> 46
  side transitions:
  33 -> 17 -> 2 -> 36 -> 33
  34 -> 14 -> 1 -> 39 -> 34
  35 -> 11 -> 0 -> 42 -> 35
  
  U' = 
  actually U' == U with current -> prev state check
*/
before = [];
after = [];
/*
  D = 
  yellow center:  22 -> 22
  yellow corners: 18 - 20 - 26 - 24 - 18
  yellow edges:   19 - 23 - 25 - 21 - 19
  side transitions:
  8-15-27-38-8
  6-9-29-44-6
  7-12-28-41-7

  D' = 
  same as D reversed (current -> previous state)
*/
/*  
  R = 
  red center:  40-40
  red corners: 36-38-44-42-36
  red edges:   37-41-43-39
  side transitions:
  0-18-27-53-0
  3-21-30-50-3
  6-24-33-47-6
*/
/*
  L = 
  orange center:  13-13
  orange corners: 9-11-17-15-9
  orange edges: 10-14-16-12-10
  side transitions:
  2-51-29-20-2
  5-48-32-23-5
  8-45-35-26-8
*/
/*
  F = 
  green center: 
  green conrenrs: 
  green edges:
  B = 
  blue center: 
*/