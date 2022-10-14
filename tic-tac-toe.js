window.addEventListener("load", (event)=> {
    let squares  = document.querySelectorAll("#board > div");
    let state = -1;

    squares.forEach((sq)=> {
        sq.classList.add("square");
        sq.innerHTML = " ";

    });

    squares.forEach((sq)=> {
        sq.onclick = (event)=>{
            if (state == -1 || state == 1){
                sq.classList.remove("O");
                sq.classList.add("X");
                sq.innerHTML = 'X';
                state = 0;
            }
            else {
                sq.classList.remove("X");
                sq.classList.add("O");
                sq.innerHTML = 'O';
                state = 1;
            }
        }
    });
});