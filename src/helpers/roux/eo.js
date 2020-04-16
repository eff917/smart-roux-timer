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
const whiteOrYellow = (edge) => [2,4].includes(edge);

export function isEOsolved(cubeState) {
  console.log("checking EO.")
  let edges = eoIndexes.map(i => cubeState[i])
  return edges.every(whiteOrYellow)
};