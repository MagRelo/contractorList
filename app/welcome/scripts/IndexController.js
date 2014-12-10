angular
  .module('welcome')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here

    $scope.launchGithub = function(){
      supersonic.app.openURL("http://www.github.com/magrelo/contractorlist");
    }
  });
