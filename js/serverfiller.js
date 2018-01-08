(function(){
    var projects=JSON.parse(document.getElementById('jsonObject').innerHTML);
    console.log(projects);

    var cards='';

    for(i=0;i<projects.length;i++){
        var ns=projects[i].project_name_short;
        //console.log(ns);
        var nl=projects[i].project_name_short;
        var img=projects[i].project_image;
        var desc=projects[i].project_desc;
        var link=projects[i].project_link;
        var date=projects[i].project_date;
        cards=cards+"<a href='"+link+"'><div class='card'><div class='cardImg'><img src='images/projectHeaders/cgeerts.png'></div><h2 class='cardTitle'>my site</h2><h2 class='cardSubTitle'>A link to the repository for this site. My favorite work in progress.</h2><h2 class='cardDate'>since july, 2017</h2></div></a>";
        console.log(cards);
    }
    /*
    <a href='https://github.com/ColeyG/fullCanvasSplash'>
        <div class='card'>
            <div class='cardImg'><img src='images/projectHeaders/cgeerts.png'></div>
            <h2 class='cardTitle'>my site</h2>
            <h2 class='cardSubTitle'>A link to the repository for this site. My favorite work in progress.</h2>
            <h2 class='cardDate'>since july, 2017</h2>
        </div>  
    </a>
    */
})();