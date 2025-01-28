const btns = document.querySelectorAll('.btns');

btns.forEach(btn => {
    
    let onbtn = false;
    btn.addEventListener('click',() => {

        
        onbtn = !onbtn;

        if (onbtn) {
           btn.classList.add('onclick-btns'); 
        } else if (!onbtn) {
            btn.classList.remove('onclick-btns');
        }
    });
});