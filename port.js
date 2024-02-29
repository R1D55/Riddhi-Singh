let title = document.querySelector('.pt-head');
let mane = "Front-End Developer / UX & UI Designer"
let index = 1;

const typeWriter = () => {
    let new_title = mane.slice(0,index);
    title.innerText = new_title;
     
    index++;

    setTimeout(() => typeWriter(), 250 , loop=true);
        
    }
typeWriter(); 