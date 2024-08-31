var photo= document.querySelector('.lightbox');
var showimage = document.querySelector('.lightbox img');
var gallery1 = document.querySelectorAll('.image');
gallery1.forEach(function(image){
    image.onclick=function(){
        photo.classList.add('show');
        showimage.src=this.children[0].src
    }
})
photo.onclick=function(){
    photo.classList.remove("show");
}