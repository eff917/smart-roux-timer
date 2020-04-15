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
const faceletIndexes = [
  [0,2,6,8], // blue
  [9,11,15,17], // orange
  [18,20,24,26], // yellow
  [27,29,33,35], //green
  [36,38,42,44], // red
  [45,47,51,53] // white
];
const faces = [
  "[1,1,1,1]",
  "[2,2,2,2]",
  "[3,3,3,3]",
  "[4,4,4,4]",
  "[5,5,5,5]",
  "[6,6,6,6]"
];

const allEqual = (face) => {
  faces.includes(JSON.stringify(facelets))
};

export function isCMLLsolved(cubeState) {
  let cmllDone = true;
  faceletIndexes.forEach( face => {
    let facelets = JSON.stringify(face.map(i => cubeState[i]));
    console.log(facelets);
    if (!faces.includes(facelets)) {
      cmllDone = false;
    };
  });
  console.log(cmllDone);
  return cmllDone;
};
