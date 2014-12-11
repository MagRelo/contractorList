angular.module('geolocation').controller('GeolocationController', function($scope, supersonic, $timeout) {
  $scope.viewIndex = -1;
  $scope.position = {
    latitude: 0,
    longitude: 0,
    accuracy: 100
  };

  //get contractor data
  var Contractor = supersonic.data.model('Contractor');
  Contractor.findAll().then( function(data) {
    // access here the collection allBeers
    $scope.contractors = data;
    //$scope.apply();

    // bind it to superscope
    supersonic.bind($scope, "contractors");
  });

  $scope.mapContractor = function(contractor, index){
    $scope.position = {
      latitude: contractor.lat,
      longitude: contractor.long
    };

    $scope.viewIndex = index;

  };

  $scope.callContractor = function(contractor){

    var options = {
      message: "Make a telephone call to " + contractor['Contact Name'] + " at " + contractor['Company Name'] + "?",
      buttonLabels: ["Cancel", "Call Now"]
    };

    supersonic.ui.dialog.confirm("Call " + contractor['Company Name'], options).then(function(index) {
      if (index == 0) {
        supersonic.logger.log("No call :(");
      } else {
        supersonic.logger.log("They called!");
      }
    });

  };


  //position functions
  $scope.isGettingPosition = false;
  $scope.isWatchingPosition = false;
  $scope.getPosition = function() {

    //close open cards
    $scope.viewIndex = -1;

    if ($scope.isGettingPosition || $scope.isWatchingPosition) {
      return;
    }

    $scope.isGettingPosition = true;
    return supersonic.device.geolocation.getPosition().then(function(position) {
      return $scope.position = position.coords;

    })["finally"](function() {
      return $scope.isGettingPosition = false;
    });

  };
  $scope.startWatchingPosition = function() {

    //close open cards
    $scope.viewIndex = -1;

    if ($scope.isWatchingPosition) {
      return;
    }
    $scope.isWatchingPosition = true;
    return supersonic.device.geolocation.watchPosition({
      enableHighAccuracy: true
    }).onValue(function(position) {
      return $timeout(function() {
        return $scope.position = position.coords;
      });
    });
  };
  $scope.stopWatchingPosition = function() {
    return $scope.isWatchingPosition = false;
  };
  $scope.toggleWatch = function() {
    if ($scope.isWatchingPosition) {
      return $scope.stopWatchingPosition();
    } else {
      return $scope.startWatchingPosition();
    }
  };

  //initialize position
  supersonic.ui.views.current.whenVisible(function() {
    if (!$scope.isWatchingPosition) {
      return $scope.getPosition();
    }
  });
  if (!$scope.isWatchingPosition) {
    return $scope.getPosition();
  }
});