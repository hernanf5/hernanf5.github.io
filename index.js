window.addEventListener('scroll', function () {
    if (window.scrollY > 700) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

let array = ["agua.jpg", "levadura.jpg", "harina.jpg", "sal.jpg", "tomate.jpg", "mozzarella.jpg"];
let i = 0;
function previous() {
    let img = document.getElementById("image-carousel"); 
    if(i==0){
        i=array.length-1;
        img.style.backgroundImage = `url('./assets/${array[i]}')`;
    }else{
        i--;
        img.style.backgroundImage = `url('./assets/${array[i]}')`;
    }
}

function next() {
    let img = document.getElementById("image-carousel"); 
    console.log(img.style.backgroundImage);
    if(i==array.length-1){
        i=0;
        img.style.backgroundImage = `url('./assets/${array[i]}')`;
    }else{
        i++;
        img.style.backgroundImage = `url('./assets/${array[i]}')`;
    }
}