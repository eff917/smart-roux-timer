import { 
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    FaceColors,
    Color,
    Vector3
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
geometry.faces[0].color.setHex(cubeColor[5]);
geometry.faces[1].color.setHex(cubeColor[5]);

geometry.faces[2].color.setHex(cubeColor[3]);
geometry.faces[3].color.setHex(cubeColor[3]);

geometry.faces[4].color.setHex(cubeColor[1]);
geometry.faces[5].color.setHex(cubeColor[1]);

geometry.faces[6].color.setHex(cubeColor[6]);
geometry.faces[7].color.setHex(cubeColor[6]);

geometry.faces[8].color.setHex(cubeColor[4]);
geometry.faces[9].color.setHex(cubeColor[4]);

geometry.faces[10].color.setHex(cubeColor[2]);
geometry.faces[11].color.setHex(cubeColor[2]);
// for ( var i = 0; i < geometry.faces.length; i ++ ) {
//     geometry.faces[ i ].color.setHex( cubeColor[~~(i/2)+1] );
// };
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

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.004;
    cube.rotation.z += 0.003;
    cube.rotateX(0.01)
    cube.rotateY(0.02)
    cube.rotateZ(0.01)
    
    
    renderer.render( scene, camera );
};

animate();