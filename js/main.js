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
        "I work with <span class='typeChange'>css,</span>^1000",
        "I work with <span class='typeChange'>html,</span>^1000",
        "I like to <span class='typeChange'>tinker,</span>^1000",
        "I like to <span class='typeChange'>make things.</span>^1000"
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
        window.scrollTo({top: scroll, left: 0, behavior: 'smooth' });
    }

    rocker.addEventListener('click',down,false);
})();