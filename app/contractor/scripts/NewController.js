angular
  .module('contractor')
  .controller("NewController", function ($scope, Contractor, supersonic) {
    $scope.contractor = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newcontractor = new Contractor($scope.contractor);
      newcontractor.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });