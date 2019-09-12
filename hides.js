document.querySelector('a').style.display = 'none';

document.querySelector('.site-footer-owner').style.display = 'none'

function ocultar(id){
   if( document.querySelector(id)){
        document.querySelector(id).style.display = 'none'; 
   }
    
    return  document.querySelector(id).style.display == 'none';
}
function serv(){
  setTimeout(function(){  
      var ocultou = ocultar('.site-footer-owner')
      if( !ocultou ){
        serv();
      }
         
    } , 30);

}

serv();

