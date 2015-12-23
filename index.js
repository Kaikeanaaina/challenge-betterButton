var aloha = document.getElementsByTagName('button')[0];
aloha.addEventListener('mouseenter',function(){
  this.style.background = 'red';
  this.style.padding = '10px';

});

aloha.addEventListener('mouseleave',function(){
  this.style.background = 'blue';
  this.style.padding = '0px';
});