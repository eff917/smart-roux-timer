import { 
    BoxGeometry,
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
    FaceColors,
    Color,
    Vector3,
    Colors,
    VertexColors
  } from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  var renderer = new WebGLRenderer();
  renderer.setSize( 600, 600 );
  document.body.appendChild( renderer.domElement );
    
var scene = new Scene();
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
    new MeshBasicMaterial( {color: cubeColor.blue} ),
    new MeshBasicMaterial( {color: cubeColor.white} ), // to orange
    new MeshBasicMaterial( {color: cubeColor.orange} ), // to yellow
    new MeshBasicMaterial( {color: cubeColor.yellow} ), // to green
    new MeshBasicMaterial( {color: cubeColor.red} ), // to red
    new MeshBasicMaterial( {color: cubeColor.green} ), // to white
];
var geometry = new BoxBufferGeometry( 3, 3, 3, 3, 3, 3);

// delete default face groups, and define groups for each cubie
let colorArray=[6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 3, 5, 3, 5, 3, 5, 3, 5, 2, 4, 2, 4, 2, 4, 2, 4, 2, 1, 6, 1, 6, 1, 6, 1, 6, 1, 3, 5, 3, 5, 3, 5, 3, 5, 3, 4, 2, 4, 2, 4, 2, 4, 2, 4];
recolorCube(colorArray);

export function recolorCube(array) {
    geometry.clearGroups();
    // TODO change group order:
    // each facelet is a group of 6 vertice points
    // each face consists of 9 cubies
    // blue facelets
    for(let i=0; i<54; i+=6) {
        geometry.addGroup(i, 6, array[(i/6)]-1); // the last number is the index of the color from material list
    };
    // orange facelets
    for( let i=(2*54); i<(3*54); i+=6) {
        geometry.addGroup(i, 6, array[(i/6)]-1); // the last number is the index of the color from material list
    };
    // yellow facelets
    for( let i=(3*54); i<(4*54); i+=6) {
        geometry.addGroup(i, 6, array[(i/6)]-1); // the last number is the index of the color from material list
    };
    // green facelets
    for( let i=(5*54); i<(6*54); i+=6) {
        geometry.addGroup(i, 6, array[(i/6)]-1); // the last number is the index of the color from material list
    };
    // red facelets
    for( let i=(4*54); i<(5*54); i+=6) {
        geometry.addGroup(i, 6, array[(i/6)]-1); // the last number is the index of the color from material list
    };
    // white facelets
    for( let i=(1*54); i<(2*54); i+=6) {
        geometry.addGroup(i, 6, array[(i/6)]-1); // the last number is the index of the color from material list
    };
};
// combine colors and geometry

var cube = new Mesh( geometry, material);
console.log(cube)
scene.add( cube );

camera.position.z = 5;

export function render() {

    renderer.render( scene, camera );
    console.log(cube)

};

