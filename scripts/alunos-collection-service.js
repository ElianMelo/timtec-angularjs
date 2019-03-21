/*
Nome do autor: Elian Melo Morais
Data de criação do arquivo: 20/03/2019
Objetivo sucinto do programa: Service que manipula os dados de alunos
Referência ao enunciado/origem do exercício: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
 angular.module('aplicacao').service('AlunosCollectionService', function ($filter) {

     var ordenadoPorNome = false;
     var ordenadoPorIdade = false;

     var alunos = [{'nome': 'Joãozinho', 'idade': 9},
                  {'nome': 'Ricardinho', 'idade': 11},
                  {'nome': 'Felipinho', 'idade': 11},
                  {'nome': 'Zildinha', 'idade': 14},
                  {'nome': 'Marianinha', 'idade': 10},
                  {'nome': 'Luluzinha', 'idade': 12}];

    this.getAlunos = function () {
        return alunos;
    }

    this.adicionarAluno = function (aluno) {
        alunos.push(aluno);
    }

    this.ordenarPorNome = function () {
        ordenadoPorNome = !ordenadoPorNome;
        alunos = $filter('orderBy')(alunos, 'nome', ordenadoPorNome);
    }

    this.ordenarPorIdade = function () {
        ordenadoPorIdade = !ordenadoPorIdade;
        alunos = $filter('orderBy')(alunos, 'idade', ordenadoPorIdade)
    }

});
