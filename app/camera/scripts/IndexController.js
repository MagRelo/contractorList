angular
  .module('camera')
  .controller('IndexController', function($scope, supersonic) {

    $scope.imageSrc = null;
    $scope.cordovaError = null;

    var photoOptions = {
      quality: 50,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      encodingType: "png",
      saveToPhotoAlbum: true
    };

    $scope.takePicture = function(){
      supersonic.media.camera.takePicture(photoOptions)
        .then(function(result){
          imageUriReceived(result);
      });
    };

    var fileError, gotFileObject, imageUriReceived;

    fileError = function(error) {
      $scope.cordovaError = "Cordova error code: " + error.code;
      return $scope.$apply();
    };

    gotFileObject = function(file) {
      var fileMoved;
      steroids.on("ready", function() {
        var fileName, targetDirURI;
        targetDirURI = "file://" + steroids.app.absoluteUserFilesPath;
        fileName = "user_pic.png";
        return window.resolveLocalFileSystemURI(targetDirURI, function(directory) {
          return file.moveTo(directory, fileName, fileMoved, fileError);
        }, fileError);
      });

      return fileMoved = function(file) {
        $scope.imageSrc = "/" + file.name + "?" + ((new Date()).getTime());
        return $scope.$apply();
      };
    };

    imageUriReceived = function(imageURI) {
      return window.resolveLocalFileSystemURI(imageURI, gotFileObject, fileError);
    };

  });
