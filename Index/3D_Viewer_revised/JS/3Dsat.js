

let currentDroppable = null;

    
    sat.onmousedown = function(event) {

              let shiftX = event.clientX - sat
              .getBoundingClientRect().left;
              let shiftY = event.clientY - sat
              .getBoundingClientRect().top;

              sat
              .style.position = 'absolute';
              sat
              .style.zIndex = 1000;
              document.body.append(sat
                );

              moveAt(event.pageX, event.pageY);

              function moveAt(pageX, pageY) {
                sat
                .style.left = pageX - shiftX + 'px';
                sat
                .style.top = pageY - shiftY + 'px';
      }
    
      function onMouseMove(event) {
        
              moveAt(event.pageX, event.pageY);

              

          var eventSat = (event.pageX / $(window).width())*360;  // at first we are getting the value of where the div is, then deviding it by the windwo width and multiplying ti by 360 which is the range of sat

            $("body").css({"background":"hsl("+document.getElementById('color')+","+eventSat+","+document.getElementById('light')+")"}) // then, with the use of jquery, accessing the css and chnaging body backgrounf sat
            // with the var element that was created line above
            

              sat
              .hidden = true;
              let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
              sat
              .hidden = false;

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

      sat
      .onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        sat
        .onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    sat
    .ondragstart = function() {
      return false;
    };


