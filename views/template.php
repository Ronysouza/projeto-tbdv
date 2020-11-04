<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/home.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/estilo.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/clientes.css">	 
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/contato.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/animacao.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/sistemas.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/servicos.css">

	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/modal_com.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/port.css">
	 <link rel="shortcut icon" href="assets/images/logo.png" type="image/x-icon"/>
	 
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/rodape.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/escrever.css">
	<link rel="stylesheet" type="text/css" href="<?php BASE_URL?>assets/css/font.css">
	<title>TBDV</title>
</head>
<body>

<!--whats flutuante-->

<div class="divWhatsapp">


<div class="img">
		<a title="Fale Conosco via whatsapp" href= "">
			    		<img height="60" class="img-fluid"   src="assets/images/ico-whatsapp2.png">
			    	

			    	</a>
</div>
	
</div>

<!--whats flutuante-->


 <header>

 <div class="container-fluid menu">
 	<div class="container">
 	<div class="menu-letra-inf">
 	 <div class="menu-letra"><a class="menu-letra" href="home">Inicial</a></div>
     <div class="menu-letra"><a class="menu-letra" href="sobre">Sobre</a></div>
     <div class="menu-letra"><a class="menu-letra" href="clientes">Clientes</a></div>
     <div class="menu-letra"><a class="menu-letra" href="contato">Contato</a></div>
     
 	</div>	
     
   
 	</div>
 	
 </div>



  <div class="container-fluid topo ">
    
    <div class="row">
    	<div class="col-lg-6"  >
    	<center><img class="img-fluid" id="logo-img" src="assets/images/loho_tbdv.png"></center>
    	</div>
    	<div class="col-lg-6"  >
    		<div class="borda-radius-20">
    		  <center><input class="form-control" style="" type="text" name="chave" placeholder="O qual a sua dúvida?"></center><br>
    		<center><button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"  style="background-color: #696969;color: #ddd">2 Via de Boleto</button></center>

    		</div>
    		
    	</div>
    	 
    	
    </div>  
  </div>
   <center><button id="botao-menu" class="btn btn-default" style="background-color: #DCDCDC" >MENU</button></center><br>
   <div class="container menu-mobile" >
    <center><div ><a href="">Inicial</a></div>
   		<div><a href="">Sobre</a></div>
   			<div><a href="">Clientes</a></div>
   				<div><a href="">Contato</a></div>
   					 
   	</center>
   </div>




 </header> 
 
 <main  >
 	<?php  $this->loadViewInTemplate($viewName,$viewData);   ?>

 </main>

<footer class="container-fluid footer">
	 
	 <div class="container menu-rodape">
	 	<div class="row">
	 		<div class="col-sm-3">
	 			<div><strong>Menu</strong></div>
	 			<br>
	 			<div class="meun-rodape-info" ><a href="home">Inicial</a></div>
	 			<div  class="meun-rodape-info"><a href="sobre">Sobre</a></div>
	 			<div  class="meun-rodape-info"><a href="clientes">Clientes</a></div>
	 			<div  class="meun-rodape-info"><a href="contato">Contato</a></div>
	 		</div>
	 		<div class="col-sm-3">
	 			<div><strong>Atendimento</strong></div>
	 			<br>
	 			<div class="meun-rodape-info" >Fone:(11)9 5768-4599 </div>
	 			<div  class="meun-rodape-info"> Celular / whatsapp:(11)9 3466-7859</div>
	 			<div  class="meun-rodape-info">E-mail:contato@tbdv.tk </div>
	 			<div  class="meun-rodape-info"> Contato </div>
	 		</div>
	 		<div class="col-sm-6 menu-img">
	 			<div><strong>Formas de Pagamento</strong></div>
	 			<br>
	 			<img class="img-fluid" src="assets/images/d.png">
	 			<img class="img-fluid" src="assets/images/q.png">
	 			<img class="img-fluid" src="assets/images/c.png">
	 		</div>
	 	</div>
	 	
	 </div>
	

 

</footer>


 <div class="container-fluid rodape-credits">

	 <div class="container">
	 	<div class="row">
	 		<div class="col-sm-6">
	 			© Copyright 2020 - R7webdesign Ltda -
	 		</div>
	 		<div class="col-sm-6" style="text-align: right;">
	 		<a target="_blank" href="https://r7webdesign.com"><img class="img-fluid" src="assets/images/logo_oficial.png"></a>
	 		</div>
	 		
	 	</div>
	 	
	 </div>

	 </div>


<script type="text/javascript" src=" assets/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src=" assets/js/bootstrap.min.js"></script>  
 
<script type="text/javascript" src="assets/js/script.js"></script>
 
</body>
</html>