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



    



// $(document).ready(function () {
//    getRandomColor();
//    RandomMouseMoveColor();
// });

// function getRandomColor() {
//  document.body.style.background = "#"+((1<<24)*Math.random()|0).toString(16);
// }

// function RandomMouseMoveColor() {
// var $win = $(window),
//     w = 0,h = 0,
//     rgb = [],
//     getWidth = function() {
//         w = $win.width();
//         h = $win.height();
//     };

// $win.resize(getWidth).mousemove(function(e) {

//     rgb = [
//         Math.round(e.pageX/w * 255),
//         Math.round(e.pageY/h * 255),
//         150
//     ];

//     $(document.body).css('background','rgb('+rgb.join(',')+')');

// }).resize();
// }






















// var thing = document.querySelector("#thingColor");
//     var inside = document.querySelector("#insideColor");

//     var active = false;
//     var currentX;
//     var currentY;
//     var initialX;
//     var initialY;
//     var xOffset = 0;
//     var yOffset = 0;

//     inside.addEventListener("touchstart", dragStart, false);
//     inside.addEventListener("touchend", dragEnd, false);
//     inside.addEventListener("touchmove", drag, false);

//     inside.addEventListener("mousedown", dragStart, false);
//     inside.addEventListener("mouseup", dragEnd, false);
//     inside.addEventListener("mousemove", drag, false);

//     function dragStart(e) {
//       if (e.type === "touchstart") {
//         initialX = e.touches[0].clientX - xOffset;
//         initialY = e.touches[0].clientY - yOffset;
//       } else {
//         initialX = e.clientX - xOffset;
//         initialY = e.clientY - yOffset;
//       }

//       if (e.target === thing) {
//         active = true;
//       }
//     }

//     function dragEnd(e) {
//       initialX = currentX;
//       initialY = currentY;

//       active = false;
//     }

//     function drag(e) {
//       if (active) {
      
//         e.preventDefault();
      
//         if (e.type === "touchmove") {
//           currentX = e.touches[0].clientX - initialX;
//           currentY = e.touches[0].clientY - initialY;
//         } else {
//           currentX = e.clientX - initialX;
//           currentY = e.clientY - initialY;
//         }

//         xOffset = currentX;
//         yOffset = currentY;

//         setTranslate(currentX, currentY, thing);
//       }
//     }

//     function setTranslate(xPos, yPos, el) {
//       el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
//     } 
    










