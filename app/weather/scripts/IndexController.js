angular
  .module('weather')
  .controller('IndexController', function($scope, supersonic, $http) {
    // Controller functionality here

    $scope.getWeatherData = function(){

      $scope.showSpinner = true;

      //get position and then weather for that position
      supersonic.device.geolocation.getPosition().then(function(position) {
        $scope.position = position;
        $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude +'&lon=' + position.coords.longitude + '&units=imperial')
          .then(function(result){

            $scope.showSpinner = false;

            $scope.weather = result.data;

          })
      });

    };


  });
