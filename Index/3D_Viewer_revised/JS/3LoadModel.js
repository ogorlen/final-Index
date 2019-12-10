var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 200;
// camera.position.y = 1;





var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement );





var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial ({color: 0x00ff00});






// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; 
// controls.campingFactor = 0.25;
// controls.enableZoom = true;








var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
keyLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);



// var objLoader = new THREE.OBJLoader();
// objLoader.setPath('To_Load/')
// objLoader.load('TEST.obj', function(object){
// 	object.position.y -= 60;
// 	scene.add(object);
// })













var objloader = new THREE.OBJLoader();

// load a resource
objloader.load(
	// resource URL
	'',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
















var animate = function (){
	requestAnimationFrame(animate);

	controls.update();

};
animate();










