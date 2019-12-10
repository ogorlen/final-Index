		


		var scene = new THREE.Scene();

		var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
		camera.position.z = 200;
		// camera.position.y = 1;




		var renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setClearColor(document.querySelector("color"));
		// renderer.setClearColor("pink");
		renderer.setSize(window.innerWidth,window.innerHeight);

		document.body.appendChild(renderer.domElement);

		


		window.addEventListener('resize', () =>{
			renderer.setSize(window.innerWidth,window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;

			camera.updateProjectionMatrix();
		})

		

		



// this is all for the box
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
		var mesh = new THREE.Mesh(geometry, material);
// ends here





		// scene.add(mesh);




		var light = new THREE.PointLight(0XFFFFFF, 1.3, 100)
		light.position.set(10,0,25);
		scene.add(light);


// add control here

	// var controls = new THREE.OrbitControls(camera, renderer.domElement);
	// controls.enableDampling = true;
	// controls.dampingFactor = 0.25;
	// controls.enableZoom = true;

	// controls.screenSpacePanning = false;

	// controls.minDistance = 100;
	// controls.maxDistance = 400;


// Add load model here











// var loader = new THREE.OBJLoader();

// loader.load(
// 	// resource URL
// 	'/To_Load/test.obj',function ( obj ) {
// 	// called when resource is loaded
// 		scene.add( obj );
// 	},
// 	// called when loading is in progresses
// 	function ( xhr ) {
// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
// 	},
// 	// called when loading has errors
// 	function ( error ) {
// 		console.log( 'An error happened' );
// 	}
// );





	renderer.render(scene, camera);
		var render = function(){
			requestAnimationFrame(render);
			// mesh.rotation.y += 0.01;
			renderer.render(scene, camera);
		}

		render();