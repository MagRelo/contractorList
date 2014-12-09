angular
  .module('contractor')
  .controller("IndexController", function ($scope, Contractor, supersonic) {
    $scope.contractors = null;
    $scope.showSpinner = true;

    Contractor.all().whenChanged( function (contractors) {
        $scope.$apply( function () {
          $scope.contractors = contractors;
          $scope.showSpinner = false;

          // bind it to superscope
          supersonic.bind($scope, "contractors");
        });
    });
  });