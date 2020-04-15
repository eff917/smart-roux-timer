/* 
  FB + SB + CMLL +
  All facelets on yellow and white faces are yellow or white
*/

/*
indexes:
18,19,20,21,22,23,24,25,26
45,46,47,48,49,50,51,52,53

colors: 2,4
*/

const eoIndexes = [18,19,20,21,22,23,24,25,26,45,46,47,48,49,50,51,52,53]
export function isEOsolved(cubeState) {
  let eoSolved = true;
  eoIndexes.forEach(facelet => {
    if (cubeState[facelet] != 2 || cubeState[facelet] != 4) {
      eoSolved = false;
      break;
    };
  });
  return eoSolved;
};