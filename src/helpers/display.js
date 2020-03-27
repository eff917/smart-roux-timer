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

const cubeColor = [
    0x000000,
    0x009b48, //green
    0xffd500, //yellow
    0xb71234, //red
    0xffffff, //white
    0xff5800, //orange
    0x0046ad, //blue
];


// define colorGroup to choose color from
var material = [
    new MeshBasicMaterial( {color: cubeColor[5]} ),
    new MeshBasicMaterial( {color: cubeColor[3]} ),
    new MeshBasicMaterial( {color: cubeColor[1]} ),
    new MeshBasicMaterial( {color: cubeColor[6]} ),
    new MeshBasicMaterial( {color: cubeColor[4]} ),
    new MeshBasicMaterial( {color: cubeColor[2]} ),
];
var geometry = new BoxBufferGeometry( 3, 3, 3, 3, 3, 3);

// delete default face groups, and define groups for each cubie
let colorArray=[6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 3, 5, 3, 5, 3, 5, 3, 5, 2, 4, 2, 4, 2, 4, 2, 4, 2, 1, 6, 1, 6, 1, 6, 1, 6, 1, 3, 5, 3, 5, 3, 5, 3, 5, 3, 4, 2, 4, 2, 4, 2, 4, 2, 4];
geometry.clearGroups();
for(let i=0; i<geometry.index.count; i+=6) {
    geometry.addGroup(i, 6, colorArray[(i/6)]-1); // the last number is the index of the color from material list
}

export function recolorCube(array) {
    geometry.clearGroups();
    for(let i=0; i<geometry.index.count; i+=6) {
        geometry.addGroup(i, 6, array[(i/6)]-1); // the last number is the index of the color from material list
    }
};
// combine colors and geometry

var cube = new Mesh( geometry, material);
console.log(cube)
scene.add( cube );

camera.position.z = 5;

export function render() {

    renderer.render( scene, camera );

};

