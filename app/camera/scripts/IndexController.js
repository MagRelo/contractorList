angular
  .module('camera')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here

    $scope.takePicture = function(){

      var options = {
        quality: 50,
        allowEdit: true,
        targetWidth: 300,
        targetHeight: 300,
        encodingType: "png",
        saveToPhotoAlbum: true
      };
      supersonic.media.camera.takePicture(options).then(function(result){
        // Do something with the image URI

        $scope.imageURI = result;

      });

    }
  });
