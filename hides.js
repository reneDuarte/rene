document.querySelector('a').style.display = 'none';

function ocultar(id){
   if( document.querySelector(id)){
        document.querySelector(id).style.display = 'none'; 
   }
    
    return  document.querySelector(id).style.display == 'none';
}
function serv(id){
  setTimeout(function(){  
      var ocultou = ocultar(id)
      if( !ocultou ){
        serv();
      }
         
    } , 3000);

}

serv('.site-footer-owner');

