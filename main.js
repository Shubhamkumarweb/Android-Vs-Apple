document.addEventListener('DOMContentLoaded', () => {
    const android = document.querySelector('.android')
    const game = document.querySelector('.game')
    const body = document.querySelector('body')
    const alert = document.getElementById('alert');
    const apple=document.querySelector('.apple');
    let isJumping = false
    let gravity = 0.9
    let isGameOver = false
    let counter=0;
    function control(e) {
      if (e.keyCode === 32) {
        if (!isJumping) {
          isJumping = true
          jump()
        }
      }
    }
    document.addEventListener('keyup', control)
    
    let position = 0
    function jump() {
      let count = 0
      let timerId = setInterval(function () {
        //move down
        if (count === 15) {
          clearInterval(timerId)
          let downTimerId = setInterval(function () {
            if (count === 0) {
              clearInterval(downTimerId)
              isJumping = false
            }
            position -= 6;
            count--;
            position = position * gravity
            android.style.top = 160- position + 'px'
          },20)
    
        }
        //move up
        position +=6;
        count++;
        position = position * gravity
        android.style.top = 160-position + 'px'
      },20)

    }
    
    function generateapples() {
      let applePosition = 710;
      
      apple.style.left = applePosition + 'px'
  
      let timerId = setInterval(function() {
        let androidTop = parseInt(window.getComputedStyle(android).getPropertyValue("top"));
        let appleLeft = parseInt(window.getComputedStyle(apple).getPropertyValue("left"));
       
        if (appleLeft > 0 && appleLeft < 60 && androidTop >180) {
          clearInterval(timerId);
          document.getElementById("score").innerHTML = Math.floor(counter/15);
          alert.innerHTML="Game over.<br><br> Reload to restart the game."
          
        }else{
          counter++;
          document.getElementById("score").innerHTML = Math.floor(counter/15);
      }
        applePosition -=10;
        apple.style.left=applePosition + 'px';
        if(appleLeft<=0)
        {
          applePosition=710;
        }
      },25)
     
    }
    generateapples()
  });