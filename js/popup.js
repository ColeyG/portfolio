(function(){
    var popdownButton=document.getElementById("popdown");
    function popup(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        document.body.style.overflow="hidden";
        document.getElementById("lightBox").style.display="flex";
    }
    function popdown(){
        document.body.style.overflowY="scroll";
        document.getElementById("lightBox").style.display="none";
    }
    popup();
    popdownButton.addEventListener("click",popdown,false);
})();