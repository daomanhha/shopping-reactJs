
    var loader = document.querySelector('.lds-spinner');
    var App = document.querySelector('#App');


    window.addEventListener('load',function(){
      setTimeout(function(){
        loader.style.display = 'none';
        App.style.visibility = 'visible';
        App.style.opacity = 1;
      },1000);
    });
