window.addEventListener('scroll',function(){
        if(window.scrollY > 133){
            document.querySelector('.menu').classList.add('navbar-fixed-top')

        }else{
          
            document.querySelector('.menu').classList.remove('navbar-fixed-top')
        }
})


 

 document.getElementById('botao-menu').addEventListener('click',function(){
  
        $('.menu-mobile').animate({

                opacity:'toggle'
        },500)
        
 })











function chama_ancora(ancora) 
	{
		//this.location = "#" + ancora;
	}

// === Máscaras de campos ===

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
 
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
 
function mvalor(v){ 
    v=v.replace(/\D/g,"");//Remove tudo o que não é dígito 
    v=v.replace(/(\d)(\d{8})$/,"$1.$2");//coloca o ponto dos milhões 
    v=v.replace(/(\d)(\d{5})$/,"$1.$2");//coloca o ponto dos milhares 
         
    v=v.replace(/(\d)(\d{2})$/,"$1,$2");//coloca a virgula antes dos 2 últimos dígitos 
    return v; 
}
 
function leech(v){
    v=v.replace(/o/gi,"0")
    v=v.replace(/i/gi,"1")
    v=v.replace(/z/gi,"2")
    v=v.replace(/e/gi,"3")
    v=v.replace(/a/gi,"4")
    v=v.replace(/s/gi,"5")
    v=v.replace(/t/gi,"7")
    return v
}
 
function soNumeros(v){
    return v.replace(/\D/g,"")
}
 
function telefone(v){
	if(v.length >= 1)
		{
			if(v.length >= 15)
				{
					v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
					v=v.replace(/^(\d\d)(\d)/g,"($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
					v=v.replace(/(\d{5})(\d)/,"$1-$2")    //Coloca hífen entre o quarto e o quinto dígitos
				}
			else
				{
					v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
					v=v.replace(/^(\d\d)(\d)/g,"($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
					v=v.replace(/(\d{4})(\d)/,"$1-$2")    //Coloca hífen entre o quarto e o quinto dígitos
				}
		}
    return v
}
 
function cpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}
 
function cep(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
    v=v.replace(/^(\d{5})(\d)/,"$1-$2") //Esse é tão fácil que não merece explicações
    return v
}

function data(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d{2})(\d)/,"$1/$2/$3") //Esse é tão fácil que não merece explicações
    return v
}

function cnpj(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
    return v
}
 
function romanos(v){
    v=v.toUpperCase()             //Maiúsculas
    v=v.replace(/[^IVXLCDM]/g,"") //Remove tudo o que não for I, V, X, L, C, D ou M
    //Essa é complicada! Copiei daqui: http://www.diveintopython.org/refactoring/refactoring.html
    while(v.replace(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,"")!="")
        v=v.replace(/.$/,"")
    return v
}
 
function site(v){
    //Esse sem comentarios para que você entenda sozinho ;-)
    v=v.replace(/^http:\/\/?/,"")
    dominio=v
    caminho=""
    if(v.indexOf("/")>-1)
        dominio=v.split("/")[0]
        caminho=v.replace(/[^\/]*/,"")
    dominio=dominio.replace(/[^\w\.\+-:@]/g,"")
    caminho=caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g,"")
    caminho=caminho.replace(/([\?&])=/,"$1")
    if(caminho!="")dominio=dominio.replace(/\.+$/,"")
    v="http://"+dominio+caminho
    return v
}

// === Fim Máscaras de campos ===


function question(frase,endereco)
	{
		if(confirm(frase))
			{
				window.location=endereco;
			}
	}

function orcamento_add(id_pro)
	{
		if(document.getElementById("qtde_ite").value == "")
			{
				alert('Por favor, informe a quantidade.');
				document.getElementById("qtde_ite").focus();
				return false;
			}
		var qtde_ite = document.getElementById('qtde_ite').value;
		window.location = '/orcamento/'+qtde_ite+'/'+id_pro+'/adicionar-item';
	}

function legenda_edit(id_fot,div)
	{
		$('#'+div).load("foto.php?action=legenda_edit&id_fot="+id_fot);
	}
	
function legenda_update(campo,id_fot,div)
	{
		//ajax('#divFrm'+id_fot,'foto.php?action=legenda_update'+id_fot,1,'#'+div);
		var desc_fot = document.getElementById(campo).value;
		$('#'+div).load("foto.php?action=legenda_update&id_fot="+id_fot+"&desc_fot="+encodeURI(desc_fot));
	}
	
function del_foto(frase,id_fot,div)
	{
		if(confirm(frase))
			{
				$('#'+div).load("/admin/foto.php?action=del_foto&id_fot="+id_fot+"&div="+div);
				if(document.getElementById('divFotoIn'))
					{
						document.getElementById('divFotoIn').innerHTML = 'Enviar uma nova foto<br /><input name="arquivo" type="file" class="arquivo" id="arquivo" size="30" /><br />';
					}
			}
	}

function busca_subcategoria(div,id_sub)
	{
		var id_cap = document.getElementById("id_cap").value;		
		$('#'+div).load('produto.php?action=busca_subcategoria&id_cap='+id_cap+'&id_sub='+id_sub);
	}
	
function simula_tab(objeto,event)
	{
		var tecla = window.event ? event.keyCode : event.which;
		var CharCode = String.fromCharCode(tecla);
		
		if(tecla == 13)
			{
				document.getElementById(objeto).focus();
			}
	}
	
function foto_destaque(id_fot,frase,situacao_fot,div)
	{
		if(confirm(frase))
			{
				$('#'+div).load("foto.php?action=foto_destaque&id_fot="+id_fot+"&situacao_fot="+situacao_fot+"&div="+div);
			}
	}
	
function mostra_esconde_div(opcao,div)
	{
		if(opcao == 1)
			{
				document.getElementById(div).style.visibility = "hidden"; 
			}
		else
			{
				document.getElementById(div).style.visibility = "visible";
			}
	}
	
function mostra_esconde_div_geral(opcao,div)
	{
		var div_c = document.getElementById(div);
		if(opcao == 0)
			{
				div_c.style.display = 'none';
			}
		else
			{
				div_c.style.display = '';
			}
	}

function video_cadastrar(div)
	{
		if(document.getElementById("desc_vid").value == '')
			{
				alert('Por favor, preencha os campos obrigatórios.');
				document.getElementById("desc_vid").focus();
				return false;
			}
		if(document.getElementById("url_vid").value == '')
			{
				alert('Por favor, preencha os campos obrigatórios.');
				document.getElementById("url_vid").focus();
				return false;
			}
		var desc_vid = document.getElementById('desc_vid').value;
		var url_vid = document.getElementById('url_vid').value;
		$('#'+div).load("video.php?action=video_cadastrar&desc_vid="+desc_vid+"&url_vid="+encodeURIComponent(url_vid));	
	}

function video_form(div)
	{
		$('#'+div).load("video.php?action=video_form");	
	}

function video_lista(div)
	{
		$('#'+div).load("video.php?action=video_lista");	
	}
	
function insere_textarea(prefixo,parametro)
	{
		tinyMCE.execCommand('mceInsertContent',false,'&nbsp;'+prefixo+parametro+'&nbsp;');
	}
	
function foto_destaque_mostra(id_fot,situacao_fot,div)
	{
		$('#'+div).load("foto.php?action=foto_destaque_mostra&id_fot="+id_fot+"&situacao_fot="+situacao_fot+"&div="+div);
	}
	
function calendario_data(data)
	{
		var dia = data.substr(8,2);
		var mes = data.substr(5,2);
		var ano = data.substr(0,4);
		document.getElementById('data_con').value = dia+'/'+mes+'/'+ano;
	}
	
function ordenacao_add(campo)
	{
		var botao = 'but'+campo;
		var ordenacao = document.getElementById('ordenacao').value;
		var sequencia = document.getElementById('sequencia').value;
		if(document.getElementById(botao).value == '(   )')
			{
				ordenacao++;
				document.getElementById('sequencia').value += campo+',';
				document.getElementById('ordenacao').value = ordenacao;
				document.getElementById(botao).value = '('+ordenacao+')';
				document.getElementById(botao).style.backgroundColor='#990000';
				document.getElementById(botao).style.color='#FFF';
				//document.getElementById(botao).disabled = true;
			}
		else
			{
				sequencia = sequencia.replace(''+campo+',','');
				document.getElementById('sequencia').value = ''+sequencia+'';
				ordenacao--;
				document.getElementById('ordenacao').value = ordenacao;
				document.getElementById(botao).style.backgroundColor='#EAEAEA';
				document.getElementById(botao).style.color='#333';
				document.getElementById(botao).value = '(   )';
			}
	}
	
function busca_principal()
	{
		if((document.getElementById("chave").value.length < 1) || (document.getElementById("chave").value == 'Pesquisar...'))
			{
				alert('Por favor, informe ao menos 1 caracter para a busca.');
				document.getElementById("chave").value = '';
				document.getElementById("chave").focus();
				return false;
			}
		else
			{
				window.location='/buscas/'+$('#chave').val()+'';
			}
	}

function cadastra_news(div)
	{
		if(document.getElementById("nome").value == "")
			{
				alert('Por favor, preencha os campos obrigatórios.');
				document.getElementById("nome").focus();
				return false;
			}
		if(document.getElementById("email").value == "")
			{
				alert('Por favor, preencha os campos obrigatórios.');
				document.getElementById("email").focus();
				return false;
			}
		var nome = document.getElementById("nome").value;
		var email = document.getElementById("email").value;
		$('#'+div).load("/home.php?action=cadastra_news&nome="+nome+"&email="+email);
	}

function cadastra_news_home(div)
	{
		if(document.getElementById("nome_home").value == "" || document.getElementById("nome_home").value == "Nome")
			{
				alert('Por favor, preencha os campos obrigatórios.');
				document.getElementById("nome_home").focus();
				return false;
			}
		if(document.getElementById("email_home").value == "" || document.getElementById("email_home").value == "E-mail")
			{
				alert('Por favor, preencha os campos obrigatórios.');
				document.getElementById("email_home").focus();
				return false;
			}
		var nome_home = document.getElementById("nome_home").value;
		var email_home = document.getElementById("email_home").value;
		$('#'+div).load("/home.php?action=cadastra_news_home&nome="+nome_home+"&email="+email_home);
	}

function cidade_form(div)
	{
		$('#'+div).load("cidade.php?action=cidade_form");
	}
	
function cidade_cadastrar(div)
	{
		if(document.getElementById("id_est").value == "")
			{
				alert('Por favor, preencha os campos obrigatórios.');
				document.getElementById("id_est").focus();
				return false;
			}
		if(document.getElementById("desc_cid").value == "")
			{
				alert('Por favor, preencha os campos obrigatórios.');
				document.getElementById("desc_cid").focus();
				return false;
			}
		var id_est = document.getElementById("id_est").value;
		var desc_cid = document.getElementById("desc_cid").value;
		$('#'+div).load("cidade.php?action=cidade_cadastrar&id_est="+id_est+"&desc_cid="+desc_cid);
	}
	
function cidade_listar(div)
	{
		$('#'+div).load("cidade.php?action=cidade_listar");
	}
	
function mural_insere_emotion(num)
	{
		document.getElementById("mensagem_msg").value += " ::"+num+":: ";
		document.getElementById("mensagem_msg").focus();
	}
	
function limite_caracteres(campo,limite,campo_result)
	{
		if(document.getElementById(campo).value.length >= limite)
			{
				document.getElementById(campo).value = document.getElementById(campo).value.substr(0,limite);
			}
		document.getElementById(campo_result).value = limite - document.getElementById(campo).value.length;
	}
	
function imprimir(opcao)
	{
		if(document.getElementById('divPrint'))
			{
				if(opcao == 1)
					{
						mostra_esconde_div_geral(1,'divPrint');
						mostra_esconde_div_geral(0,'divPrint2');
					}
				else
					{
						mostra_esconde_div_geral(0,'divPrint');
						mostra_esconde_div_geral(1,'divPrint2');
					}
			}
	}
	
function slide_movimento(id)
	{
		var img = id;
		var top = 100;
		var top2 = (top*2);
		var num = 0;
		var operacao = 'subtracao';
		objInter = setInterval(function(){
		if(num <= top && operacao == 'subtracao')
			{
				num++;
				document.getElementById(img).style.marginTop = '-'+num+'px';
				if(num == top)
					{
						operacao = 'adicao';
					}
			}
		else if(operacao == 'adicao')
			{
				num--;
				document.getElementById(img).style.marginTop = '-'+num+'px';
				if(num == 0)
					{
						operacao = 'subtracao';
					}
			}
		if(document.getElementById('teste'))
			{
				//document.getElementById('teste').value = num;
			}
		}, 40);
	}
	
function validaCnpj(cnpj) 
	{
		var erro = 0;
		cnpj = cnpj.replace(/[^\d]+/g,'');
	 
		if(cnpj == '') erro++;
		 
		if (cnpj.length != 14)
			erro++;
	 
		// Elimina CNPJs invalidos conhecidos
		if (cnpj == "00000000000000" || 
			cnpj == "11111111111111" || 
			cnpj == "22222222222222" || 
			cnpj == "33333333333333" || 
			cnpj == "44444444444444" || 
			cnpj == "55555555555555" || 
			cnpj == "66666666666666" || 
			cnpj == "77777777777777" || 
			cnpj == "88888888888888" || 
			cnpj == "99999999999999")
			erro++;
			 
		// Valida DVs
		tamanho = cnpj.length - 2
		numeros = cnpj.substring(0,tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0))
			erro++;
			 
		tamanho = tamanho + 1;
		numeros = cnpj.substring(0,tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1))
			  erro++;
			   
		if(erro > 0)
			{
				alert('O CNPJ informado é inválido, por favor, redigite.');
				return erro;
			}
		else
			{
				return erro;
			}
	}
	
function icone(opcao)
	{
		document.getElementById('ico_pro').value = opcao;
	}
	

function parcela_soma()
	{
		var total = 0;
		var id = 0;
		var qtde = 0;
		var total_qtde = 0;
		var valor = '';
		var subtotal = 0;
		var frete = parseFloat($('#frete_orc').val());
		if(document.getElementById('frete_orc').value == '')
			{
				frete = 0;
			}
		var todos_elementos = document.getElementsByTagName('*');
		for(var i=0;i<todos_elementos.length; i++)
			{
				var elemento = todos_elementos[i];
				if(elemento.className == 'elementos form-control')
					{
						id = elemento.id;
						id = id.replace("preco_ite",'');
						qtde = document.getElementById('qtde_ite'+id).value;
						if(qtde != '')
							{
								total_qtde = parseFloat(total_qtde) + parseFloat(document.getElementById('qtde_ite'+id).value);
								
								// soma o valor
								valor = elemento.value;
								valor = valor.replace(".",'');
								valor = valor.replace(",",'.');
								total = total + parseFloat(valor*qtde);
							}
					}
			}

		total = total + frete;
		
		subtotal = total - frete;
		subtotal = total - frete;
		subtotal = subtotal.toFixed(2);
		subtotal = subtotal + '';
		subtotal = subtotal.replace(".",",");

		total = total.toFixed(2);
		total = total + '';
		total = total.replace(".",",");
		$('#totalParcela').val(total);
		$('#subtotal').val(subtotal);
		$('#totalItens').val(total_qtde);
	}
	
function orcamento_msg(status_orc)
	{
		var mensagem = '';
		if(status_orc == 1)
			{
				mensagem = 'Olá '+$('#nome_orc').val()+', tudo bem?\n\nSegue abaixo o seu orçamento.\n\nPrazo de entrega 30 dias após confirmação do Pedido.\n\nFrete: FOB (Por conta do cliente)\n\nObs.: Para Apartamento ou condomínio entregamos somente até a portaria.\n\nCondições de Pagamento: Para efetivar o seu pedido, basta fazer o pagamento on-line através do PagSeguro usando o botão abaixo e pague em ate 12 vezes.';
			}
		if(status_orc == 2)
			{
				mensagem = 'Olá '+$('#nome_orc').val()+', tudo bem?\n\nSegue abaixo uma confirmação do seu pedido.\n\nPor gentileza, verifique se todas as informações estão corretas e proceda com o pagamento através do botão abaixo:';
			}
		if(status_orc == 3)
			{
				mensagem = 'Olá '+$('#nome_orc').val()+', seu pagamento foi confirmado, muito obrigado!\n\nJá estamos providenciando o envio do seu pedido.';
			}
		$('#mensagem_cliente_orc').val(mensagem);
	}

/* NOVAS FUNÇÕES JQUERY e AJAX */

function ajax(elemento,endereco,loader,result)
	{
		if(loader != '')
			{
				$(result).html('<div id="loader" class="row"><div class="col-sm-12"><div class="progress progress-striped active"><div class="progress-bar"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">Carregando...<span class="sr-only">Carregando...</span></div></div></div></div>');
			}
		
		var dados = $(elemento).serialize();
		$.ajax({
			type: 'POST',
			url: endereco,
			data: dados,
			success:function(resultado){
				$(result).html(resultado);
			},
			error:function(){
				$(resultado).html('Ocorreum um erro, por favor, tente novamente.');
			}
		});
	}

function marcar_todos(alvo,elemento)
	{
		$(function(){
			{
				$(alvo).find(elemento).prop('checked', true);
			}
		});
	}
	
function desmarcar_todos(alvo,elemento)
	{
		$(function(){
			{
				$(alvo).find(elemento).prop('checked', false);
			}
		});
	}

function categoria_vinculo(id_cat,id_cat2,div)
	{
		$('#'+div).load("categoria.php?action=categoria_vinculo&id_cat="+id_cat+"&id_cat2="+id_cat2);
	}

function responder(id_msg,nome_msg)
	{
		$('#mensagem_msg').focus();
		$('#id_msg2').val(id_msg);
		$('#resposta').html('Para: <strong>'+nome_msg+'</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(limpar_resposta());"><i class="glyphicon glyphicon-remove"></i></strong></a>');
		$("html, body").animate({ scrollTop: $('#mensagem_msg').offset().top-150 }, 1000);	
	}

function limpar_resposta()
	{
		$('#resposta').html('');
		$('#id_msg2').val('');
	}

$(function(){
	
	$(document).ready(function(){
		$("video[autoplay]").each(function(){this.play(); });
	});

	


	$("#email2").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code==13) {
			e.preventDefault();
			ajax('#formEsqueci','/orcamento.php?action=esqueci_senha',1,'#divSenhaResult')
		}
	});

	$('#chave').keydown(function (e)
    {
        if(e.keyCode == 13)
            {
                busca_principal();
            }
    });

    ;(function($, win) {
      $.fn.inViewport = function(cb) {
         return this.each(function(i,el){
           function visPx(){
             var H = $(this).height()-200,
                 r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
             return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
           } visPx();
           $(win).on("resize scroll", visPx);
         });
      };
    }(jQuery, window));



    $(".animated").inViewport(function(px){
        if(px)
            {
                $(this).addClass($(this).data('id'));
            }
    });


	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	        	if($(this).hasClass('menos'))
	        		{	
	        			$(this).text(Math.ceil(now));
	        		}
	        	else
	        		{	
	        			$(this).text('+'+Math.ceil(now));
	        		}
	            
	        }
	    });	
	});


	
	 
	 
	 var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
     
    this.txt = '';
    this.tick();
    this.isDeleting = false;
	};


	TxtType.prototype.tick = function() {
	    var i = this.loopNum % this.toRotate.length;
	    var fullTxt = this.toRotate[i];

	    if (this.isDeleting) {
	    this.txt = fullTxt.substring(0, this.txt.length - 2);
	    } else {
	    this.txt = fullTxt.substring(0, this.txt.length + 2);
	    }

	    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	    var that = this;
	    var delta = 200 - Math.random() * 100;

	    if (this.isDeleting) { delta /= 2; }

	    if (!this.isDeleting && this.txt === fullTxt) {
	    delta = this.period;
	    this.isDeleting = true;
	    } else if (this.isDeleting && this.txt === '') {
	    this.isDeleting = false;
	    this.loopNum++;
	    delta = 500;
	    }

	    setTimeout(function() {
	    that.tick();
	    }, delta);
	};

	window.onload = function() {
	    var elements = document.getElementsByClassName('typewrite');
	    for (var i=0; i<elements.length; i++) {
	        var toRotate = elements[i].getAttribute('data-type');
	        var period = elements[i].getAttribute('data-period');
	        if (toRotate) {
	          new TxtType(elements[i], JSON.parse(toRotate), period);
	        }
	    }
	     
	};  
		
	 
		
});