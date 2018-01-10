(function(){

var imageClicked = document.querySelectorAll('.galleryImage');
var galleryback = document.getElementById('galleryBack');
var popupImg = document.getElementById('popupImg');

function lightbox(){
    galleryback.style.visibility="visible";
    galleryback.style.opacity="1";
    popupImg.src="images/gallery/" + this.id;
    console.log(this.id);
}

function lightDown(){
    galleryback.style.visibility="hidden";
    galleryback.style.opacity="0";
}

imageClicked.forEach(function(element,index){
    element.addEventListener('click',lightbox,false);
});

galleryBack.addEventListener("click",lightDown,false);
 
})();