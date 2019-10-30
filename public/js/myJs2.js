var Categories = document.querySelector('.categories');
var fixedBackToTopButton = document.querySelector('.fixed-backtotop-button');
var fixedShowCategories = document.querySelector('.fixed-showCategories-button');
var contentLeft = document.querySelector('.content-left');
var html = document.querySelector('html');


fixedShowCategories.onclick = ()=>{
    if(!$('.categories').hasClass('fixed-showCategories')){
        Categories.classList.add('fixed-showCategories');
    }else{
        Categories.classList.remove('fixed-showCategories'); 
    }
}
  // document.documentElement.onclick = (){
  //   console.log('a');
  // }

window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 50){
        fixedBackToTopButton.style.display = 'block';
    }else{
        fixedBackToTopButton.style.display = 'none';
    }
    // if(document.documentElement.scrollTop > 2080){
    //   Categories.style.position = 'absolute';
    //   Categories.style.opacity = 0;
    // }else{
    //   Categories.style.position = 'fixed';
    //   Categories.style.opacity = 1;
    // }
}