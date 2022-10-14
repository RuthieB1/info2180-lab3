window.addEventListener("load", (event)=> {
    let squares  = document.querySelectorAll("#board > div")
    squares.forEach((sq)=>{
        sq.classList.add("square");
    });
});