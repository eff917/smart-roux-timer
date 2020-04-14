import { whiteBlocks } from "./whiteblocks";
import { yellowBlocks } from "./yellowblocks";

var referenceState;
//solved
referenceState = [6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4];
// blue side white bottom block, yellow center down
// referenceState = [6,6,6,6,6,6,6,6,6,3,3,3,5,5,5,5,5,5,4,4,4,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,5,5,5,3,3,3,3,3,3,2,2,2,4,4,4,4,4,4]
// blue side white bottom block, red center down
// referenceState = [6,6,6,6,6,6,6,6,6,2,2,2,5,5,5,5,5,5,3,3,3,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,4,4,4,3,3,3,3,3,3,5,5,5,4,4,4,4,4,4]
// blue side white bottom block, orange center down
// referenceState = [6,6,6,6,6,6,6,6,6,4,4,4,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4]

var blocks;
blocks = whiteBlocks.concat(yellowBlocks);
//console.log(blocks)

//b.map(i => a[i])
export function findBlock(cubeState) {
    let blockFound = false;
    let blockString = "";
    let blockList = [];
    blocks.forEach(block => {
        // select elements from cubestate based on blck.index values
        let facelets = block.index.map(i => cubeState[i])
        // compare selected element colors with reference
        // console.log(block.name + " Actual    value:" + JSON.stringify(facelets));
        // console.log(block.name + " Reference value:" + JSON.stringify(block.value));
        if (JSON.stringify(facelets) == JSON.stringify(block.value)) {
            blockString += block.name + " ";
            //console.log("Block found!")
            blockFound = true;
            blockList.push(block.name);
        } 
    }
    );
    return blockList;
}


// findBlock(referenceState)