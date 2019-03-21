/*
Nome do autor: Elian Melo Morais
Data de criação do arquivo: 21/03/2019
Objetivo sucinto do programa: Controller que controla o menu da aplicacao
Referência ao enunciado/origem do exercício: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
angular.module('aplicacao').controller('MenuController', function($scope, $state) {

    $scope.irInicio = function() {
        $state.go("aplicacao_inicial");
    }

    $scope.irListagem= function() {
        $state.go("aplicacao_listagem");
    }

    $scope.irCadastro = function() {
        $state.go("aplicacao_cadastro");
    }

    $scope.irPrevisao = function() {
        $state.go("aplicacao_previsao");
    }

});
