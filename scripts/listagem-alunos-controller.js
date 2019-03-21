/*
Nome do autor: Elian Melo Morais
Data de criação do arquivo: 15/03/2019
Objetivo sucinto do programa: Controller geral que realiza diversas funções
Referência ao enunciado/origem do exercício: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
angular.module('aplicacao').controller('ListagemAlunosController', function($scope, $filter, AlunosCollectionService){
	$scope.nome = 'Elian Melo';

	$scope.iniciado = true;

    $scope.hoje = new Date();

    $scope.alunos = AlunosCollectionService.getAlunos();

	$scope.finalizar = function(){
		$scope.iniciado = false;
	};

	$scope.iniciar = function() {
		$scope.iniciado = true;
	};

    $scope.ordenarPorNome = function () {
		AlunosCollectionService.ordenarPorNome();
		$scope.alunos = AlunosCollectionService.getAlunos();
    }

    $scope.ordenarPorIdade = function () {
		AlunosCollectionService.ordenarPorIdade();
		$scope.alunos = AlunosCollectionService.getAlunos();
    }

});
