light.onmousedown = function(event) {

  let shiftX = event.clientX -light.getBoundingClientRect().left;
  let shiftY = event.clientY -light.getBoundingClientRect().top;

 light.style.position = 'absolute';
 light.style.zIndex = 1000;
  document.body.append(light);

  moveAt(event.pageX, event.pageY);

  // moves thelight at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
   light.style.left = pageX - shiftX + 'px';
   light.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move thelight on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop thelight, remove unneeded handlers
 light.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
   light.onmouseup = null;
  };

};
light.ondragstart = function() {
  return false;
};













// let currentDroppable = null;

//     light.onmousedown = function(event) {

//               let shiftX = event.clientX - light.getBoundingClientRect().left;
//               let shiftY = event.clientY - light.getBoundingClientRect().top;

//               light.style.position = 'absolute';
//               light.style.zIndex = 1000;
//               document.body.append(light);

//               moveAt(event.pageX, event.pageY);

//               function moveAt(pageX, pageY) {
//                 light.style.left = pageX - shiftX + 'px';
//                 light.style.top = pageY - shiftY + 'px';
//       }
    
//       function onMouseMove(event) {
        
//               moveAt(event.pageX, event.pageY);

              

//           var eventLight = (event.pageX / $(window).width())*360;  // at first we are getting the value of where the div is, then deviding it by the windwo width and multiplying ti by 360 which is the range of light 
//             $("body").css({"background":"hsl("+document.getElementById('color')+","+document.getElementById('sat')+","+eventLight+")"}) // then, with the use of jquery, accessing the css and chnaging body backgrounf light with the var element that was created line above



            




//               light.hidden = true;
//               let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//               light.hidden = false;

//               if (!elemBelow) return;

//               let droppableBelow = elemBelow.closest('.droppable');
//               if (currentDroppable != droppableBelow) {
//                 if (currentDroppable) { // null when we were not over a droppable before this event
//                   leaveDroppable(currentDroppable);
//                 }
//                 currentDroppable = droppableBelow;
//                 if (currentDroppable) { // null if we're not coming over a droppable now
//                   // (maybe just left the droppable)
//                   enterDroppable(currentDroppable);

//           }
//         }

//       }

//       document.addEventListener('mousemove', onMouseMove);

//       light.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         light.onmouseup = null;
//       };

//     };

//     function enterDroppable(elem) {
//       elem.style.background = 'pink';
//     }

//     function leaveDroppable(elem) {
//       elem.style.background = '';
//     }

//     light.ondragstart = function() {
//       return false;
//     };


