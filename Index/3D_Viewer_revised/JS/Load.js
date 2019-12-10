		


		var scene = new THREE.Scene();

		var camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000)
		camera.position.z = 5;
		camera.position.y = 5;
		camera.position.x = 5;




		var renderer = new THREE.WebGLRenderer({antialias: true});

		// renderer.setClear("118, 152, 207");

		// renderer.setClearColor("#84EBFF");
		// renderer.setClearColor("hsl("+$('#color')+", 50%, 50%)");
		

		renderer.setSize(window.innerWidth,window.innerHeight);

		document.body.appendChild(renderer.domElement);

		

		// https://javascript.info/mouse-drag-and-drop



let currentDroppable = null;

    color.onmousedown = function(event) {

              let shiftX = event.clientX - color.getBoundingClientRect().left;
              let shiftY = event.clientY - color.getBoundingClientRect().top;
			 
              color.style.position = 'absolute';
              color.style.zIndex = 1000;
              document.body.append(color);

              moveAt(event.pageX, event.pageY);

              function moveAt(pageX, pageY) {
                color.style.left = pageX - shiftX + 'px';
                color.style.top = pageY - shiftY + 'px';
      }






    
      function onMouseMove(event) {
        
              moveAt(event.pageX, event.pageY);

              

          var eventHue = (event.pageX / $(window).width())*360;  // at first we are getting the value of where the div is, then deviding it by the windwo width and multiplying ti by 360 which is the range of color 
            $("body").css({"background":"hsl("+eventHue +",50%,50%)"}) // then, with the use of jquery, accessing the css and chnaging body backgrounf color with the var element that was created line above





renderer.setClearColor("hsl("+eventHue+", 50%, 50%)");
		



console.log( (event.pageX / $(window).width())*360 )




              color.hidden = true;
              let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
              color.hidden = false;

              if (!elemBelow) return;

              let droppableBelow = elemBelow.closest('.droppable');
              if (currentDroppable != droppableBelow) {
                if (currentDroppable) { // null when we were not over a droppable before this event
                  leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) { // null if we're not coming over a droppable now
                  // (maybe just left the droppable)
                  enterDroppable(currentDroppable);

          }
        }

      }

      document.addEventListener('mousemove', onMouseMove);

      color.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        color.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    color.ondragstart = function() {
      return false;
    };





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





		scene.add(mesh);




		var light = new THREE.PointLight("#ccf4ff", 5, 50)
		light.position.set(10,10,25);
		scene.add(light);


// add control here

	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.enableDampling = true;
	controls.dampingFactor = 0.25;
	controls.enableZoom = true;

	controls.screenSpacePanning = false;

	controls.minDistance = 10;
	controls.maxDistance = 300;


// Add load model here











var loader = new THREE.OBJLoader();

loader.load(
	// resource URL
	'/To_Load/test.obj',function ( obj ) {
	// called when resource is loaded
	obj.position.z = 0;
	obj.position.y = 0;
	obj.position.x = 0;
		scene.add( obj );
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










		renderer.render(scene, camera);
		var render = function(){
			requestAnimationFrame(render);
			// mesh.rotation.y += 0.01;
			renderer.render(scene, camera);
		}

		render();















