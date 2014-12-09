angular
  .module('contractor')
  .controller("EditController", function ($scope, Contractor, supersonic) {
    $scope.contractor = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Contractor.find(steroids.view.params.id).then( function (contractor) {
      $scope.$apply(function() {
        $scope.contractor = contractor;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.contractor.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
