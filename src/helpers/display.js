import { 
    BoxBufferGeometry,
    MeshBasicMaterial,
    Mesh,
    Scene,
    PerspectiveCamera,
    CubeCamera,
    WebGLRenderer,
    RGBAFormat,
    LinearFilter,
    sRGBEncoding,
    Color
  } from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  var renderer = new WebGLRenderer();
  renderer.setSize( 600, 600 );
  document.body.appendChild( renderer.domElement );
    
var scene = new Scene();
scene.background = new Color( 0xf0f0f0 );
var camera = new PerspectiveCamera( 75, 1, 0.1, 1000 );
// camera
//camera = new PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 0, 30 );

var cubeCamera = new CubeCamera( 1, 1000, 256, { format: RGBAFormat, magFilter: LinearFilter, minFilter: LinearFilter } );

//Since gamma is applied during rendering, the cubeCamera renderTarget texture encoding must be sRGBEncoding
cubeCamera.renderTarget.texture.encoding = sRGBEncoding;

// controls
var controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', render );
controls.minDistance = 5;
controls.maxDistance = 30;
controls.enablePan = false;

const cubeColor = {
    "black": 0x000000,
    "green": 0x009b48, //green
    "yellow": 0xffd500, //yellow
    "red":0xb71234, //red
    "white": 0xffffff, //white
    "orange": 0xff5800, //orange
    "blue": 0x0046ad //blue
};


// define colorGroup to choose color from
var material = [
    new MeshBasicMaterial( {color: cubeColor.black} ),
    new MeshBasicMaterial( {color: cubeColor.green} ),
    new MeshBasicMaterial( {color: cubeColor.yellow} ),
    new MeshBasicMaterial( {color: cubeColor.red} ),
    new MeshBasicMaterial( {color: cubeColor.white} ),
    new MeshBasicMaterial( {color: cubeColor.orange} ),
    new MeshBasicMaterial( {color: cubeColor.blue} )
];
var geometry = new BoxBufferGeometry( 3, 3, 3, 3, 3, 3);

export function recolorCube(array) {
    geometry.clearGroups();
    // each facelet is a group of 6 vertice points
    // each face consists of 9 facelets
    let j=0
    let offset = 6;
    let stride;

    // blue facelets (needed -180degrees to match array from cube)
    for(let i=48; i>-1; i-=offset) {
    geometry.addGroup(i, offset, array[j]); // the last number is the index of the color from material list
        j++;
    };

    // orange facelets (needed to rotate clockwise)
    let faceletOrder = [2, 5, 8, 1, 4, 7, 0, 3, 6]
    stride = (4*54);
    faceletOrder.forEach(facelet => {
        geometry.addGroup(stride+facelet*offset, offset, array[j])
        j++;            
    });

    // yellow facelets (needed to rotate clockwise)
    faceletOrder = [2, 5, 8, 1, 4, 7, 0, 3, 6]
    stride = (2*54);
    faceletOrder.forEach(facelet => {
        geometry.addGroup(stride+facelet*offset, offset, array[j])
        j++;            
    });

    // green facelets (orientation is good)
    for( let i=(1*54); i<(2*54); i+=offset) {
        geometry.addGroup(i, offset, array[j]); // the last number is the index of the color from material list
        j++;
    };

    // red facelets (needed to rotate counterclockwise)
    faceletOrder = [6, 3, 0, 7, 4, 1, 8, 5, 2]
    stride = (5*54);
    faceletOrder.forEach(facelet => {
        geometry.addGroup(stride+facelet*offset, 6, array[j])
        j++;            
    });

    // white facelets (needed to rotate clockwise)
    faceletOrder = [2, 5, 8, 1, 4, 7, 0, 3, 6]
    stride = (3*54);
    faceletOrder.forEach(facelet => {
        geometry.addGroup(stride+facelet*offset, 6, array[j])
        j++;            
    });
};

// combine colors and shape
var cube = new Mesh( geometry, material);
cube.rotateZ(3.14);
cube.rotateY(3.14/4*3);
cube.rotateX(3.14/4);
scene.add( cube );

camera.position.z = 5;
export function render() {

    renderer.render( scene, camera );
    // console.log(cube)

};

