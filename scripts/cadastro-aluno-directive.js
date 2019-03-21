/*
Nome do autor: Elian Melo Morais
Data de criação do arquivo: 21/03/2019
Objetivo sucinto do programa: Cria uma directive que encapsula o cadastro de alunos
Referência ao enunciado/origem do exercício: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
angular.module('aplicacao').directive('cadastroAluno', function() {
    return{
        retrict: 'E',
        templateUrl: 'views/cadastro-aluno-template.html'
    }
});
