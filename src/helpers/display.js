import { 
    BoxGeometry,
    BoxBufferGeometry,
    MeshBasicMaterial,
    Mesh,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    FaceColors,
    Color,
    Vector3,
    Colors,
    VertexColors
  } from "three";
  
  
var scene = new Scene();
var camera = new PerspectiveCamera( 75, 1, 0.1, 1000 );

const cubeColor = [
    0x000000,
    0x009b48, //green
    0xffd500, //yellow
    0xb71234, //red
    0xffffff, //white
    0xff5800, //orange
    0x0046ad, //blue
];

var renderer = new WebGLRenderer();
renderer.setSize( 600, 600 );
document.body.appendChild( renderer.domElement );

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
geometry.clearGroups();
for(let i=0; i<geometry.index.count; i+=6) {
    geometry.addGroup(i, 6, Math.floor(Math.random() * 6)); // the last number is the index of the color from material list
}

// combine colors and geometry
var cube = new Mesh( geometry, material);
console.log(cube)
scene.add( cube );

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.004;
    cube.rotation.z += 0.003;
    cube.rotateX(0.01)
    cube.rotateY(0.02)
    cube.rotateZ(0.01)
    
    
    renderer.render( scene, camera );
};

animate();