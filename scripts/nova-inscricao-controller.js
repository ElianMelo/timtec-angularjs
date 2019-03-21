/*
Nome do autor: Elian Melo Morais
Data de criação do arquivo: 21/03/2019
Objetivo sucinto do programa: Controller que manipula a criação de alunos
Referência ao enunciado/origem do exercício: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
angular.module('aplicacao').controller('NovaInscricaoController', function ($scope, AlunosCollectionService) {

    $scope.submeter = function() {
        if($scope.form_1.$valid) {
            novo_aluno = {};
            novo_aluno['nome'] = $scope.nome_aluno;
            novo_aluno['idade'] = parseInt($scope.idade_aluno);
            AlunosCollectionService.adicionarAluno(novo_aluno);
        } else {
            alert("Preencha o formulário corretamente");
        }
    };

});
