<?php


class clientesController extends controller{

	public function index(){
	 

		$dados = array();

		$this->loadTemplate('clientes',$dados);
		

	}









}