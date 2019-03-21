/*
Nome do autor: Elian Melo Morais
Data de criação do arquivo: 21/03/2019
Objetivo sucinto do programa: Controller que manipula a service de previsao de tempo
Referência ao enunciado/origem do exercício: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource) {
    var WeatherChannel = $resource('https://api.openweathermap.org/data/2.5/weather?id=3445831&units=metric&APPID=38b899a2792fd94d9cbb387bab0c8018');

    var getWeather = function() {
        WeatherChannel.get().$promise.then(function(response){
            $scope.tempo = response;
            console.log(response);
        }, function(promise){
            alert("Erro ao requisitar o Recurso!");
        })
    }

    getWeather();

});
