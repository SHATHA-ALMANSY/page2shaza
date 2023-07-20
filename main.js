let img = document.querySelector('.img');
let container = document.querySelector('.container');


// هلقين حنعمل فنكشن هادي الدالة حتكون مجرد ما نضغط هلى 
// الصورة يغيرلي للصورة الي مختارة 

function phones(phone){
    img.src =phone;
}

function colors(color){
    container.style.background = color ;
}