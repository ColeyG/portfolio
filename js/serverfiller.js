(function(){
    var projects=JSON.parse(document.getElementById('jsonObject').innerHTML);
    var cardArea=document.querySelectorAll('.cardBanner');

    var cards='';

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
})();