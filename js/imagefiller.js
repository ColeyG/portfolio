(function(){

    var data="";

    const httpRequest = new XMLHttpRequest();
    function loading(){
        if(!httpRequest){
            alert('failed');
            return false;
        }

        httpRequest.onreadystatechange = processRequest;
        httpRequest.open("GET",'includes/getImages.php',true);
        httpRequest.send();
    }

    function processRequest(){
        if(httpRequest.readyState == XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                //console.log(httpRequest.responseText);
                let data = JSON.parse(httpRequest.responseText);
                processResult(data);
            }else{
                console.log('fail');
            }
        }
    }

    function processResult(data){
        for(i=0;i<data.length;i++){
            var name=data[i].images_name;
            var path=data[i].images_path;
            //<img src="images/gallery/1.png" alt="gallery image" id="1.png" class="galleryImage">
            images=images+"<img src='"+path+"/"+name+"' alt='gallery image' id='"+name+"' class='galleryImage'>";
            gallArea.innerHTML=images;
            if(i==data.length-1){addFunctionality();}
        }
    }

    function addFunctionality(){
        var imageClicked = document.querySelectorAll('.galleryImage');
        var galleryback = document.getElementById('galleryBack');
        var popupImg = document.getElementById('popupImg');

    function lightbox(){
        galleryback.style.visibility="visible";
        galleryback.style.opacity="1";
        popupImg.src="images/gallery/" + this.id;
    }

    function lightDown(){
        galleryback.style.visibility="hidden";
        galleryback.style.opacity="0";
    }

    imageClicked.forEach(function(element,index){
        element.addEventListener('click',lightbox,false);
    });

    galleryBack.addEventListener("click",lightDown,false);
        }

    var gallArea=document.getElementById('galleryConImages');

    var images='';
    
    loading();
})();