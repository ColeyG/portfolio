(function(){

    var data="";

    const httpRequest = new XMLHttpRequest();
    function loading(){
        if(!httpRequest){
            alert('failed');
            return false;
        }

        httpRequest.onreadystatechange = processRequest;
        httpRequest.open("GET",'includes/get.php',true);
        httpRequest.send();
    }

    function processRequest(){
        if(httpRequest.readyState == XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                //console.log(httpRequest.responseText);
                let data = JSON.parse(httpRequest.responseText);
                console.log(data);
                processResult(data);
            }else{
                console.log('fail');
            }
        }
    }

    function processResult(data){
        for(i=0;i<projects.length;i++){
        var ns=projects[i].project_name_short;
        var nl=projects[i].project_name_short;
        var img=projects[i].project_image;
        var desc=projects[i].project_desc;
        var link=projects[i].project_link;
        var date=projects[i].project_date;
        cards=cards+"<a href='"+link+"'><div class='card'><div class='cardImg'><img src='images/projectHeaders/"+img+"'></div><h2 class='cardTitle'>"+ns+"</h2><h2 class='cardSubTitle'>"+desc+"</h2><h2 class='cardDate'>"+date+"</h2></div></a>";
        cardArea[0].innerHTML=cards;
        }
    }

    var projects=JSON.parse(document.getElementById('jsonObject').innerHTML);
    var cardArea=document.querySelectorAll('.cardBanner');

    console.log(projects);

    var cards='';

    /*for(i=0;i<projects.length;i++){
        var ns=projects[i].project_name_short;
        var nl=projects[i].project_name_short;
        var img=projects[i].project_image;
        var desc=projects[i].project_desc;
        var link=projects[i].project_link;
        var date=projects[i].project_date;
        cards=cards+"<a href='"+link+"'><div class='card'><div class='cardImg'><img src='images/projectHeaders/"+img+"'></div><h2 class='cardTitle'>"+ns+"</h2><h2 class='cardSubTitle'>"+desc+"</h2><h2 class='cardDate'>"+date+"</h2></div></a>";
        cardArea[0].innerHTML=cards;
    }*/

    loading();
})();