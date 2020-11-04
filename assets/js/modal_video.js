 var img_video_modal = document.querySelectorAll('.img_video_modal')
 

 function abrir_modal_video(obj){      
    //document.querySelector('.modal_imagem_videos').style.opacity ='0'
       
     //setTimeout(() => {
      //  document.querySelector('.modal_imagem_videos').style.opacity ='1'
        //document.querySelector('.modal_imagem_videos').style.display ='block'
     //}, 500);

     $('.modal_imagem_videos').animate({
        width:'toggle'
     },1000)

    

    $.ajax({
        url:'https://r7webdesign.com/index.php?url=videos/videos_modal/'+obj,
        type:'GET',
        dataType:'json',
        success:function(json){

           json.forEach(function(item){

            get_imagem_modal.innerHTML =  `<center><iframe  class='video_iframe' src="${item.url_video}"
             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center><br><br>` 


           })

           

        }
    })
 }


  


  
        
         
   
 
fechar_modal_sair.forEach(function(item){
    item.addEventListener('click',function(){
      document.querySelector('.video_iframe').remove(); 
          
           //document.querySelector('.modal_p').style.display ='none'
           $('.modal_p').animate({
              opacity:'hide'

           })
           $('.modal_imagem_videos').animate({
            opacity:'hide'

         })
        //document.querySelector('.modal_imagem_videos').style.display ='none'
     
        
    })

}) 