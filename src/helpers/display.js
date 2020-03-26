import { 
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    FaceColors,
    Color
  } from "three";
  
  
var scene = new Scene();
var camera = new PerspectiveCamera( 75, 1, 0.1, 1000 );

const cubeColor = [
    "0x000000",
    "0x009b48", //green
    "0xffd500", //yellow
    "0xb71234", //red
    "0xffffff", //white
    "0xff5800", //orange
    "0x0046ad", //blue
];

var renderer = new WebGLRenderer();
renderer.setSize( 600, 600 );
document.body.appendChild( renderer.domElement );

var geometry = new BoxGeometry();
for ( var i = 0; i < geometry.faces.length; i ++ ) {
    geometry.faces[ i ].color.setHex( cubeColor[~~(i/2)+1] );
};
var material = new MeshBasicMaterial(
    {
        color: 0xffffff,
        vertexColors: FaceColors
       }
);
geometry.colorsNeedUpdate = true
var cube = new Mesh( geometry, material);
scene.add( cube );

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    renderer.render( scene, camera );
};

animate();