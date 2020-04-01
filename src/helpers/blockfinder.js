var referenceState;
//solved
referenceState = [6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4];
// blue side white bottom block, yellow center down
// referenceState = [6,6,6,6,6,6,6,6,6,3,3,3,5,5,5,5,5,5,4,4,4,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,5,5,5,3,3,3,3,3,3,2,2,2,4,4,4,4,4,4]
// blue side white bottom block, red center down
// referenceState = [6,6,6,6,6,6,6,6,6,2,2,2,5,5,5,5,5,5,3,3,3,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,4,4,4,3,3,3,3,3,3,5,5,5,4,4,4,4,4,4]
// blue side white bottom block, orange center down
// referenceState = [6,6,6,6,6,6,6,6,6,4,4,4,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4]

const blocks = [
    // blue side white bottom block, white center down
    // blue indexes 0,1,2,3,4,5 = 6
    // white indexes 45,46,47 = 4
    // orange indexes 10,11 = 5
    // red indexes 36,37 = 3
    {
        index: [0,1,2,3,4,5,10,11,36,37,45,46,47],
        value: [6,6,6,6,6,6,5,5,3,3,4,4,4]
    
    },
    // blue side white bottom block, yellow center down
    // blue(6): 3,4,5,6,7,8
    // white(4): 18,19,20
    // orange(5): 37,38
    // red(3): 9,10
    {
        index: [3,4,5,6,7,8,9,10,18,19,20,37,38],
        value: [6,6,6,6,6,6,3,3,4,4,4,5,5]
    },
    // blue side white bottom block, red center down
    // blue(6): 0,1,3,4,6,7
    // white(4): 36,37,38
    // orange(5): 46,47
    // red(3): 18,19
    {
        index: [0,1,3,4,5,6,18,19,36,37,38,46,47],
        value: [6,6,6,6,6,6,3,3,4,4,4,5,5]
    },
    // blue side white bottom block, orange center down
    // blue(6): 1,2,4,5,7,8
    // white(4): 9,10,11
    // orange(5): 19,20
    // red(3): 45,46
    {
        index: [1,2,3,4,7,8,9,10,11,19,20,45,46],
        value: [6,6,6,6,6,6,4,4,4,5,5,3,3]
    },
    // green side white down, white center down
    {
        index: [14,17,30,31,32,33,34,35,39,42,51,52,53],
        value: [5,5,1,1,1,1,1,1,3,3,4,4,4]
    },
    // green side white down, yellow center down
    {
        index: [15,16,24,25,26,27,28,29,30,31,32,43,44],
        value: [3,3,4,4,4,1,1,1,1,1,1,5,5]
    },
    // green side white down, red center down
    {
        index: [24,25,27,28,30,31,33,34,42,43,44,52,53],
        value: [3,3,1,1,1,1,1,1,4,4,4,5,5]
    },
    // green side white down, orange center down
    {
        index: [15,16,17,25,26,28,29,31,32,34,35,51,52],
        value: [4,4,4,5,5,1,1,1,1,1,1,3,3]
    },
    // red side white down, white center down
    {
        index: [0,3,30,33,36,37,39,40,42,43,47,50,53],
        value: [6,6,1,1,3,3,3,3,3,3,4,4,4]
    },
    // red side white down, yellow center down
    {
        index: [3,6,18,21,24,27,30,37,38,40,41,43,44],
        value: [1,1,4,4,4,6,6,3,3,3,3,3,3]
    },
    // red side white down, blue center down
    {
        index: [0,3,6,18,21,36,37,38,39,40,41,47,50],
        value: [4,4,4,6,6,3,3,3,3,3,3,1,1]
    },
    // red side white down, green center down
    {
        index: [21,24,27,30,33,39,40,41,42,43,44,50,53],
        value: [1,1,4,4,4,3,3,3,3,3,3,6,6]
    },
    // orange side white down, white center down
    {
        index: [2,5,10,11,13,14,16,17,32,35,45,48,51],
        value: [6,6,5,5,5,5,5,5,1,1,4,4,4]
    },
    // orange side white down, yellow center down
    {
        index: [5,8,9,10,12,13,15,16,20,23,26,29,32],
        value: [1,1,5,5,5,5,5,5,4,4,4,6,6]
    },
    // orange side white down, blue center down
    {
        index: [2,5,8,9,10,11,12,13,14,20,23,45,48],
        value: [4,4,4,5,5,5,5,5,5,6,6,1,1]
    },
    // orange side white down, green center down
    {
        index: [12,13,14,15,16,17,23,26,29,32,35,48,51],
        value: [5,5,5,5,5,5,1,1,4,4,4,6,6]
    }

]


//b.map(i => a[i])
export function findBlock(cubeState) {
    var blockFound = false
    blocks.forEach(block => {
        // select elements from cubestate based on blck.index values
        var facelets = block.index.map(i => cubeState[i])
        // compare selected element colors with reference
        if (JSON.stringify(facelets) == JSON.stringify(block.value)) {
            console.log("Block found!")
            blockFound = true;
        } 
    }
    );
    if (blockFound) {
        return "Block Found."
    } else {
        return "No block found."
    }
}


// findBlock(referenceState)