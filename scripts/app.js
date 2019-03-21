/*
Nome do autor: Elian Melo Morais
Data de criação do arquivo: 15/03/2019
Objetivo sucinto do programa: Criar uma aplicação em angularjs
Referência ao enunciado/origem do exercício: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
var app = angular.module('aplicacao', ['ngResource', 'ui.router'])
    .config(function($stateProvider){
        $stateProvider
            .state('aplicacao_inicial', {
                name: 'aplicacao_inicial',
                url: '/inicial.html',
                templateURL: 'views/inicial.html'
            }).state('aplicacao_listagem', {
                name: 'aplicacao_listagem',
                url: '/listagem.html',
                templateURL: 'views/listagem-alunos.html'
            }).state('aplicacao_cadastro', {
                name: 'aplicacao_cadastro',
                url: '/cadastro.html',
                templateURL: 'views/cadastro-alunos.html'
            }).state('aplicacao_previsao', {
                name: 'aplicacao_previsao',
                url: '/previsao.html',
                templateURL: 'views/previsao-do-tempo.html'
            });
    });
