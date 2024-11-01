/*
;(function(){
  const body = document.body || document.getElementsByTagName('body')[0];
  
  let scrollbarX = document.createElement('div');
  scrollbarX.className = 'scrollbar-x';
  body.appendChild(scrollbarX);
  
  let scrollbarY = document.createElement('div');
  scrollbarY.className = 'scrollbar-y';
  body.appendChild(scrollbarY);
  
  let scrollbarThumbX = document.createElement('div');
  scrollbarThumbX.className = 'scrollbar-thumb-x';
  scrollbarX.appendChild(scrollbarThumbX);
  
  let scrollbarThumbY = document.createElement('div');
  scrollbarThumbY.className = 'scrollbar-thumb-y';
  scrollbarY.appendChild(scrollbarThumbY);
  
  let activeX = false, activeY = false;
  let initX, initY;
  let currentX, currentY;
  let offsetX = 0, offsetY = 0;
  
  scrollbarX.addEventListener('touchstart', function(e){dragStart(e, 'x')}, false);
  scrollbarX.addEventListener('touchend', function(e){dragEnd(e, 'x')}, false);
  scrollbarX.addEventListener('touchmove', function(e){drag(e, 'x')}, false);
  scrollbarX.addEventListener('mousedown', function(e){dragStart(e, 'x')}, false);
  scrollbarX.addEventListener('mouseup', function(e){dragEnd(e, 'x')}, false);
  scrollbarX.addEventListener('mousemove', function(e){drag(e, 'x')}, false);
  
  scrollbarY.addEventListener('touchstart', function(e){dragStart(e, 'y')}, false);
  scrollbarY.addEventListener('touchend', function(e){dragEnd(e, 'y')}, false);
  scrollbarY.addEventListener('touchmove', function(e){drag(e, 'y')}, false);
  scrollbarY.addEventListener('mousedown', function(e){dragStart(e, 'y')}, false);
  scrollbarY.addEventListener('mouseup', function(e){dragEnd(e, 'y')}, false);
  scrollbarY.addEventListener('mousemove', function(e){drag(e, 'y')}, false);
  
  function dragStart(e, xy){
    if(e.type === 'touchstart'){
      if(xy === 'x'){initX = e.touches[0].clientX - offsetX;}
      if(xy === 'y'){initY = e.touches[0].clientY - offsetY;}
    }else{
      if(xy === 'x'){initX = e.clientX - offsetX;}
      if(xy === 'y'){initY = e.clientY - offsetY;}
    }

    if(xy === 'x' && e.target === scrollbarThumbX){
      activeX = true;
    }
    if(xy === 'y' && e.target === scrollbarThumbY){
      activeY = true;
    }
  }
  
  function dragEnd(e, xy){
    if(xy === 'x'){
      initX = currentX;
      activeX = false;
    }
    if(xy === 'y'){
      initY = currentY;
      activeY = false;
    }
  }
  
  function drag(e, xy){
    if((activeX && xy === 'x') || (activeY && xy === 'y')){
      
      e.preventDefault();
      
      if(e.type === 'touchmove'){
        if(xy === 'x'){currentX = e.touches[0].clientX - initX;}
        if(xy === 'y'){currentY = e.touches[0].clientY - initY;}
      }else{
        if(xy === 'x'){currentX = e.clientX - initX;}
        if(xy === 'y'){currentY = e.clientY - initY;}
      }

      if(xy === 'x'){
        offsetX = currentX;
        if(currentX <= 0){
        	currentX = 0;
        }else if(currentY >= scrollbarX.clientWidth - scrollbarThumbX.clientWidth){
        	currentX = scrollbarX.clientWidth - scrollbarThumbX.clientWidth;
        }
        scrollbarThumbX.style.transform = 'translateX('+currentX+'px)';
      }
      if(xy === 'y'){
        offsetY = currentY;
        if(currentY <= 0){
        	currentY = 0;
        }else if(currentY >= scrollbarY.clientHeight - scrollbarThumbY.clientHeight){
        	currentY = scrollbarY.clientHeight - scrollbarThumbY.clientHeight;
        }
        scrollbarThumbY.style.transform = 'translateY('+currentY+'px)';
      }
    }
  }
  
  setInterval(function(){
  	scrollbarThumbY.style.height = ((scrollbarY.clientHeight*3) - body.clientHeight)-1200+'px';
  }, 100);
  
})();
*/
