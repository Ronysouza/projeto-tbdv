var fechar_modal_sair = document.querySelectorAll('.fechar_modal_sair')
var get_imagem_modal = document.querySelector('.get_imagem_modal')


document.querySelector('.abrir_imagen_modal').addEventListener('click',function(e){
    e.preventDefault() 
    document.querySelector('.modal_imagem_int').style.display = 'block'
    var id_imagem = document.getElementById('id_imagem').value
     

    $.ajax({
        url:'https://r7webdesign.com/index.php?url=portifolio/portifolio_imagem/'+id_imagem,
        type:'GET',
        dataType:'json',
        success:function(json){

           json.forEach(function(item){
            get_imagem_modal.innerHTML =  `<h1 title="desenvolvimento de sites em salto" style="font-size: 30px;color: #339999">${item.nome}</h1><br><br>
            <a target='_blank' href="${item.link}"><img class="img-fluid" src="assets/images/${item.imagem_apresentacao}"></a>` 


           })

           

        }
    })
 


})






fechar_modal_sair.forEach(function(item){
    item.addEventListener('click',function(){

         
    
        
        document.querySelector('.modal_imagem_int').style.display ='none'
        
    })

}) 



function mudaPagina(obj){
   window.location.href= obj;
}
