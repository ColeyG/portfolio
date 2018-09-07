(function(){
    var rocker=document.getElementById('downRockerButton');
    var scroll=window.innerHeight;
    var options = {
        strings: [
        "I am a <span class='typeChange'>designer,</span>^1000",
        "I am a <span class='typeChange'>developer,</span>^1000",
        "I am a <span class='typeChange'>creator,</span>^1000",
        "I work with <span class='typeChange'>js,</span>^1000",
        "I work with <span class='typeChange'>php,</span>^1000",
        "I work with <span class='typeChange'>sass,</span>^1000",
        "I work with <span class='typeChange'>node,</span>^1000",
        "I work with <span class='typeChange'>vue,</span>^1000",
        "I like to <span class='typeChange'>tinker,</span>^1000",     
        "I like to <span class='typeChange'>make things.</span>^1000",
        "I love to <span class='typeChange'>learn.</span>^1000"
        ],
        startDelay: 2000,
        typeSpeed: 40,
        backSpeed: 40,
        loop:true,
        smartBackspace:true
        /*Add comma points and extra typed.js attributes here.
        Code is found at: https://github.com/mattboldt/typed.js/*/
      }
      
    var typed = new Typed(".moving", options);
    
    function down(e){
        e.preventDefault();
        window.scrollTo({top: scroll*.9, left: 0, behavior: 'smooth' });
    }

    rocker.addEventListener('click',down,false);

    function fillProj(data){
        let respD=JSON.parse(data);
        let cards='';
        for(i=0;i<respD.entries;i++){
            let card="<a href='#' class='cardColdLink'>";
            card+="<div class='cardCold' id=card_"+[i]+"><h2 class='cardColdTitle'>"+respD[i].title+"</h2>";
            card+="<p class='cardColdSlug'>"+respD[i].slug+"</p></div></a>";

            cards+=card;
        }
        let cardBanner=document.querySelector('.cardBanner');
        cardBanner.innerHTML=cards;
        for(i=0;i<respD.entries;i++){
            let bgCard=document.querySelector('#card_'+[i]);
            bgCard.style.backgroundImage="url("+respD[i].image+")";
        }

        let linkSet=document.querySelectorAll('.cardColdLink');

        linkSet.forEach(element => {
            element.addEventListener('click',descriptorArea,false);
        });

        setTimeout(function (){
            let cardsElement=document.querySelectorAll('.cardCold');
            cardsElement.forEach(element => {
                element.style.opacity='0.9';
            });
        },500);
    }

    function descriptorArea(e){
        e.preventDefault();
        let areaControl=document.querySelector('.overlay');
        areaControl.style.opacity='.5';
    }

    coldAjax("get",'php/projectRetriever.php',fillProj);
})();