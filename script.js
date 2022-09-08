var closeNav = document.getElementById('close');
closeNav.addEventListener('click', function(){
    closeNav.style.transition = '0.5';
    document.getElementById('nav-2').style.width = '300px';
    closeNav.style.display = 'none';
    document.getElementById('opp').style.display = 'inline';
 
});

var nav = document.getElementById('opp');
nav.addEventListener('click', function(){
    nav.style.transition = '0.5';
    document.getElementById('nav-2').style.width = '0px';
    nav.style.display = 'none';
    document.getElementById('close').style.display = 'inline';
 
});

