console.log('this is working')

function createBoard() {
    const cont = document.getElementById('PlayerA_board')
    for(let i = 0; i < 10; i++) {
        for(let k = 0; k < 10; k++) {
            // create a div element
            const newDiv = document.createElement('div');
            // Apply class
            newDiv.classList.add('newDiv');
            // Set the proper size of each accoding to the size of the box;
            newDiv.style.width = `${460/10}px`
            newDiv.style.height = `${460/10}px`
            // append container 
            cont.innerText("Hello")
        }  
    }
}

createBoard()