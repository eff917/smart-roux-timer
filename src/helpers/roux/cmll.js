/*
CMLL: FB + SB + all corners are solved relative to each other
all facelets on the same side have the same color


indexes:
  Blue: 0,2,6,8
  Orange: 9,11,15,17
  Yellow: 18,20,24,26
  Green: 27,29,33,35
  Red: 36,38,42,44
  White: 45,47,51,53
 */
const faceletIndexes = {
  "blue": [0,2,6,8],
  "orange": [9,11,15,17],
  "yellow": [18,20,24,26],
  "green": [27,29,33,35],
  "red": [36,38,42,44],
  "white": [45,47,51,53]
};

const allEqual = arr => arr.every( v => v === arr[0] )
  
export function isCMLLsolved(cubeState) {
  let solved = true;
  faceletIndexes.forEach(side => {
    let facelets = side.map(i => cubeState[i])
    if (!allEqual( facelets )) {
      solved = false;
      break;
    };
  });
  return solved;
}
