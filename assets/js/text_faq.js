var formulario = document.querySelectorAll('.formulario') 
var nome = document.querySelector('[name="nome"]') 
 
 
 document.getElementById('faq1').addEventListener('click',function(){

$('#text-ocult1').animate({
   opacity:'toggle'
},500)


 })


 document.getElementById('faq2').addEventListener('click',function(){

	$('#text-ocult2').animate({
	   opacity:'toggle'
	},500)
	
	
	 })


  document.getElementById('faq3').addEventListener('click',function(){

	$('#text-ocult3').animate({
	   opacity:'toggle'
	},500)
	
	
	 })


   document.getElementById('faq4').addEventListener('click',function(){

	$('#text-ocult4').animate({
	   opacity:'toggle'
	},500)
	
	
	 })


    document.getElementById('faq5').addEventListener('click',function(){

	$('#text-ocult5').animate({
	   opacity:'toggle'
	},500)
	
	
	 })




    document.getElementById('faq6').addEventListener('click',function(){

	$('#text-ocult6').animate({
	   opacity:'toggle'
	},500)
	
	
	 })



	 $('.banner-fundo').animate({

		
		opacity: 'toggle'


	 },500)






	 formulario.forEach(function(item){  
	let nome = document.querySelectorAll('[type="text"],[type="number"],[type="email"]') 	 
		



	 item.addEventListener('submit',function(e){
		e.preventDefault();	

	   let nome =  [e.target.querySelector('[name="nome"]').value,
	   e.target.querySelector('[name="empresa"]').value,
	   e.target.querySelector('[name="fone"]').value,
	   e.target.querySelector('[name="email"]').value,
	   e.target.querySelector('[name="texto"]').value
	   
	    
	]
		  
	if(nome[0] == '' || nome[1] == '' || nome[2] == '' || nome[3] == '' || nome[4] == ''){
	 
		 alert('Preencha todos os campos!')
		 return false
	}else{

		$.ajax({

			method:"GET",
			url:"http://localhost/landingpage/desenvolvimentodesites/enviaForm/"+nome ,
			data:{nome:'LKMLKM'},
			dataType:'json',
			success:function(json){
	           if(json == 'ok'){
					  
				e.target.querySelector('[name="nome"]').value = ''
				e.target.querySelector('[name="empresa"]').value =''
				e.target.querySelector('[name="fone"]').value =''
				e.target.querySelector('[name="email"]').value=''
				e.target.querySelector('[name="texto"]').value =''


				setTimeout(() => {
					alert('E-mail Enviado com Sucesso,em Breve Entraremos em Contato ! ')
					window.location.href = "http://localhost/landingpage/index.php?url=desenvolvimentodesites"
				},10);

				   
                

				
			    


				


                   
			   }else{

				console.log('vazio')
				alert('Você tem que preencher todos os campos');
				return false;

			   }
				 
			}
	 
	
	
		   })

	}
	    
	    
	  
	 	 
      

		 
           




	})

	 })


