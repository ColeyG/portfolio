(function(){
    if(document.getElementById('check').innerHTML==="check"){
    var popdownButton=document.getElementById("popdown");
    function popup(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        document.getElementById("lightBox").style.display="flex";
    }
    function popdown(){
        document.getElementById("lightBox").style.display="none";
    }
    popup();
    popdownButton.addEventListener("click",popdown,false);
    }else if(document.getElementById('check').innerHTML==="fail"){
        var popdownButton=document.getElementById("popdown");
        function popup(){
            window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
            document.getElementById("lightBox").style.display="flex";
        }
        function popdown(){
            window.history.back();
        }
        document.getElementById('popCloseHook').innerHTML="Back";
        popup();
        popdownButton.addEventListener("click",popdown,false);
        document.getElementById('popTextHook').innerHTML="Unfortunately, the form has failed to submit. Either a field wasn't filled out or there was an error on the backend. Please go back and try again.";
    }
})();