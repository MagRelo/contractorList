angular
  .module('contractor')
  .controller("ShowController", function ($scope, Contractor, supersonic) {
    $scope.contractor = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Contractor.find($scope.dataId).then( function (contractor) {
        $scope.$apply( function () {
          $scope.contractor = contractor;
          $scope.showSpinner = false;

        });
      });
    };

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.contractor.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });