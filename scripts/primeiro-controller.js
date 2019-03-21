/*
Nome do autor: Elian Melo Morais
Data de criação do arquivo: 15/03/2019
Objetivo sucinto do programa: Controller geral que realiza diversas funções
Referência ao enunciado/origem do exercício: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
angular.module('aplicacao').controller('PrimeiroController', function($scope, $filter){
	$scope.nome = 'Elian Melo';

	$scope.iniciado = true;

    $scope.hoje = new Date();

    $scope.alunos = [{'nome': 'Joãozinho', 'idade': 9},
                 {'nome': 'Ricardinho', 'idade': 11},
                 {'nome': 'Felipinho', 'idade': 11},
                 {'nome': 'Zildinha', 'idade': 14},
                 {'nome': 'Marianinha', 'idade': 10},
                 {'nome': 'Luluzinha', 'idade': 12}];

	$scope.finalizar = function(){
		$scope.iniciado = false;
	};

	$scope.iniciar = function() {
		$scope.iniciado = true;
	};

    $scope.ordenarPorNome = function () {
        $scope.ordenadoPorNome = !$scope.ordenadoPorNome;
        $scope.alunos = $filter('orderBy')($scope.alunos, 'nome', $scope.ordenadoPorNome);
    }

    $scope.ordenarPorIdade = function () {
        $scope.ordenadoPorIdade = !$scope.ordenadoPorIdade;
        $scope.alunos = $filter('orderBy')($scope.alunos, 'idade', $scope.ordenadoPorIdade)
    }

    $scope.submeter = function() {
    	if($scope.form_1.$valid) {
    		novo_aluno = {};
    		novo_aluno['nome'] = $scope.nome_aluno;
    		novo_aluno['idade'] = parseInt($scope.idade_aluno);
    		$scope.alunos.push(novo_aluno);
    	} else {
    		alert("Preencha o formulário corretamente");
    	}
    };
});
