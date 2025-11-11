import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VRButton } from 'three/addons/webxr/VRButton.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
renderer.xr.enabled = true;
			renderer.xr.setReferenceSpaceType( 'local' );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( VRButton.createButton( renderer ) );

const controls = new OrbitControls( camera, renderer.domElement );
				controls.target.set( 0, 0, 0 );
				controls.update();

const light = new THREE.PointLight( 0xffffff, 1, 20 );
light.position.set( -0.2, 3, 6 );
scene.add( light );
light.castShadow = true; // default false
scene.add( light );

const light3 = new THREE.PointLight( 0xffffff, 1, 20 );
light3.position.set( -0.2, 3, 11 );
scene.add( light3 );


const light2 = new THREE.AmbientLight( 0xffffff, 0.2 ); // soft white light
scene.add( light2 );

camera.position.z = 10;


    //manager fbx
    const manager = new THREE.LoadingManager();
const loaderFbx = new FBXLoader( manager );
  

//Pared de la iz
const geometry2 = new THREE.BoxGeometry( 0.1, 8, 20 ); 
const material2 = new THREE.MeshPhongMaterial(); 
const cube2 = new THREE.Mesh( geometry2, material2 ); 
scene.add( cube2 );
cube2.position.z= 5.7
cube2.position.x= -4.7

 //Pared del fondo
const geometry = new THREE.BoxGeometry( 16, 8, 0.1 ); 
const material = new THREE.MeshPhongMaterial(); 
const cube = new THREE.Mesh( geometry, material2 ); 
scene.add( cube );

//Pared de la iz2
const geometry5 = new THREE.BoxGeometry( 0.1, 4, 20 ); 
const material5 = new THREE.MeshPhongMaterial(); 
const cube5 = new THREE.Mesh( geometry5, material5 ); 
scene.add( cube5 );
cube5.position.z= 5.7
cube5.position.x= -4.6
cube5.position.y= 2

//Piso
const geometry3 = new THREE.BoxGeometry( 15, 0.1, 20 ); 
const material3 = new THREE.MeshPhongMaterial( {color: 0xC7BF97} ); 
const cube3 = new THREE.Mesh( geometry3, material3 ); 
scene.add( cube3 );
cube3.position.y= -3.6
cube3.position.x= 0.6
cube3.position.z= 6

//techo
const geometry4 = new THREE.BoxGeometry( 17, 0.1, 20 ); 
const material4 = new THREE.MeshPhongMaterial( {color: 0xC7BF97} ); 
const cube4 = new THREE.Mesh( geometry4, material4 ); 
scene.add( cube4 );
cube4.position.y= 4.1
cube4.position.x= -0.6
cube4.position.z= 6
//pared abajo 2
const geometry6 = new THREE.BoxGeometry( 16, 4, 0.1 ); 
const material6 = new THREE.MeshPhongMaterial(); 
const cube6 = new THREE.Mesh( geometry6, material5 ); 
scene.add( cube6 );
cube6.position.y= 1.9
cube6.position.x= 0.01
cube6.position.z= 0.1

//columna
const geometry7 = new THREE.BoxGeometry( 5, 10, 2 ); 
const material7 = new THREE.MeshPhongMaterial(); 
const cube7 = new THREE.Mesh( geometry7, material7 ); 
scene.add( cube7 );
cube7.position.y= -1
cube7.position.x= -6.5
cube7.position.z= 6

//Coso de tiro

const geometry8 = new THREE.CylinderGeometry( 1.5, 1.5, 0.2, 32 ); 
const material8 = new THREE.MeshPhongMaterial(  ); 
const cylinder = new THREE.Mesh( geometry8, material8 ); 
scene.add( cylinder );

cylinder.rotation.z = Math.PI / 2;
cylinder.position.x = -4
cylinder.position.z = 11
cylinder.position.y = 2
//lampara prov 

const geometry1 = new THREE.SphereGeometry( 0.5, 10, 8 ); 
const material1 = new THREE.MeshPhongMaterial({color: 0x000000, reflectivity:3}); 
const sphere = new THREE.Mesh( geometry1, material1 );

sphere.position.y= 3.9
sphere.position.x= -0.2
sphere.position.z= 6

//cuadro 1
const geometry9 = new THREE.BoxGeometry( 0.1, 3, 2 ); 
const material9 = new THREE.MeshPhongMaterial(); 
const cube8 = new THREE.Mesh( geometry9, material9 ); 
scene.add( cube8 );
cube8.position.z= 2.5
cube8.position.x= -4.5
cube8.position.y= 2

//Tv
 
const geometry10 = new THREE.BoxGeometry( 4, 2, 0.1 ); 
const material10 = new THREE.MeshPhongMaterial(); 
const cube9 = new THREE.Mesh( geometry10, material10 ); 
scene.add( cube9 );
cube9.position.z= 0.5
cube9.position.y= 2
cube9.position.x= 2
cube9.rotation.x = Math.PI/12;

//const geometry4 = new THREE.BoxGeometry( 6, 1, 8 ); 
//const material4 = new THREE.MeshPhongMaterial( {color: 0x378256} ); 
//const cube4 = new THREE.Mesh( geometry4, material4 ); 
//scene.add( cube4 );
//cube4.position.y= -2.6
//cube4.position.x= -0.2
//cube4.position.z= 6





////TEXTURAAAAAS
//pared1 
const loader1 = new THREE.TextureLoader()
loader1.load('texturas/mumbai-679665.jpg', (texture)=>{
    material.map = texture
    
    
})



//Pared iz
const loader3 = new THREE.TextureLoader()
loader3.load('texturas/WoodSiding003_1K-JPG_Color.jpg', (texture)=>{
    
    material2.map = texture
    
    
})

loader3.load('texturas/WoodSiding003_1K-JPG_NormalGL.jpg', (texture)=>{
    material2.normalMap = texture
    
    
})

loader3.load('texturas/WoodSiding003_1K-JPG_Displacement.jpg', (texture)=>{
    material2.displayMap = texture
    
    
})

loader3.load('texturas/WoodSiding003_1K-JPG_Roughness.jpg', (texture)=>{
    material2.roughnessMap = texture
    
    
})

//Pared iz2
const loader4 = new THREE.TextureLoader()
loader4.load('texturas/textures/plastered_wall_diff_1k.jpg', (texture)=>{
    
    material5.map = texture
    
    
})

loader4.load('texturas/textures/plastered_wall_nor_gl_1k.jpg', (texture)=>{
    material5.normalMap = texture
    
    
})

loader4.load('texturas/textures/plastered_wall_disp_1k.jpg', (texture)=>{
    material5.displayMap = texture
    
    
})

loader4.load('texturas/textures/plastered_wall_rough_1k.jpg', (texture)=>{
    material5.roughnessMap = texture
    
    
})
 

//Columna
const loader7 = new THREE.TextureLoader()
loader7.load('texturas/textures/wooden_gate_diff_1k.jpg', (texture)=>{
    
    material7.map = texture
    
    
})

loader7.load('texturas/textures/wooden_gate_nor_gl_1k.jpg', (texture)=>{
    material7.normalMap = texture
    
    
})

loader7.load('texturas/textures/wooden_gate_disp_1k.jpg', (texture)=>{
    material7.displayMap = texture
    
    
})

loader7.load('texturas/textures/wooden_gate_rough_1k.jpg', (texture)=>{
    material7.roughnessMap = texture
    
    
})

//Coso de tiro
const loader8 = new THREE.TextureLoader()
loader8.load('texturas/textures/descarga.png', (texture)=>{
    
    material8.map = texture
    
    
})

const loader9 = new THREE.TextureLoader()
loader9.load('texturas/Captura de pantalla 2025-09-01 141224.png', (texture)=>{
    
    material9.map = texture
    
    
})

const loader10 = new THREE.TextureLoader()
loader10.load('texturas/Captura de pantalla 2025-09-01 143223.png', (texture)=>{
    
    material10.map = texture
    
    
})

//mesa de billar
loaderFbx.load("mesa de billar.fbx", function(object){
    object.scale.x=0.07
    object.scale.y=0.07
    object.scale.z=0.07
    object.position.x= 0.8
    object.position.y= -3.6
    object.position.z= 9

    
    
    scene.add(object)
})

//lamparas
loaderFbx.load("lampara.fbx", function(object){
    object.scale.x=0.02
    object.scale.y=0.02
    object.scale.z=0.02
    
    object.position.x= -5
    object.position.y= -2
    object.position.z= 10

    object.traverse(function(child){
        if (child.isMesh){
            child.material=material1;
        }
    })
    
    
    scene.add(object)
})

loaderFbx.load("lampara.fbx", function(object){
    object.scale.x=0.02
    object.scale.y=0.02
    object.scale.z=0.02
    
    object.position.x= -5
    object.position.y= -2
    object.position.z= 15
object.traverse(function(child){
        if (child.isMesh){
            child.material=material1;
        }
    })
    
    
    
    scene.add(object)
})

loaderFbx.load("Taco de billar.fbx", function(object){
    object.scale.x=0.07
    object.scale.y=0.07
    object.scale.z=0.07
    object.position.x= 0.8
    object.position.y= -1
    object.position.z= 9
object.rotation.x = Math.PI/2;
    
    
    scene.add(object)
})

loaderFbx.load("Taco de billar.fbx", function(object){
    object.scale.x=0.07
    object.scale.y=0.07
    object.scale.z=0.07
    object.position.x= -4.5
    object.position.y= 0
    object.position.z= 9
object.rotation.z = Math.PI/2;
    
    
    scene.add(object)
})

loaderFbx.load("Taco de billar.fbx", function(object){
    object.scale.x=0.07
    object.scale.y=0.07
    object.scale.z=0.07
    object.position.x= -4.5
    object.position.y= 0
    object.position.z= 8
object.rotation.z = Math.PI/2;
    
    
    scene.add(object)
})

loaderFbx.load("Taco de billar.fbx", function(object){
    object.scale.x=0.07
    object.scale.y=0.07
    object.scale.z=0.07
    object.position.x= 6
    object.position.y= -1.3
    object.position.z= 1
object.rotation.z = Math.PI/2;
object.rotation.x = Math.PI/-10;
    
    
    scene.add(object)
})

loaderFbx.load("Taco de billar.fbx", function(object){
    object.scale.x=0.07
    object.scale.y=0.07
    object.scale.z=0.07
    object.position.x= 7
    object.position.y= -1.3
    object.position.z= 1
object.rotation.z = Math.PI/-2.5;
object.rotation.x = Math.PI/-10;

    
    
    scene.add(object)
})

loaderFbx.load("Chair.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.04
    object.scale.z=0.04
    object.position.x= -3
    object.position.y= -3.6
    object.position.z= 14
object.traverse(function(child){
        if (child.isMesh){
            child.material=material2;
        }
    })
    
    
    scene.add(object)
})

function animate() {
    renderer.render( scene, camera );

}
camera.position.z = 25
camera.lookAt(-20, 0, -7);  