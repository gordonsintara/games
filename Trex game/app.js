const trex = document.querySelector('.trex');

function control(e){
    if (e.keyCode === 32){
        jump();
        console.log("pressed");
    }
}

document.addEventListener("keyup", control);

function jump(){
    let position = 0;
    let timerId = setInterval(function(){

        //move down
        if (position === 150){
            clearInterval(timerId);
            console.log('down');
            let downTimerId = setInterval(() => {
                if (position === 0){
                    clearInterval(downTimerId); 
                }
                position -= 30;
                trex.style.bottom = position + 'px';
            }, 20);
           
        }



        // move up
        console.log('up'); 
        position += 30;
        trex.style.bottom = position + 'px';
    },20)
}