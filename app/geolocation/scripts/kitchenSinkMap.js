angular.module('geolocation').directive('kitchensinkGoogleMaps', function($window, supersonic) {
  return {
    restrict: "E",
    template: "<div class=\"google-maps-container\"></div>",
    replace: true,
    scope: {
      position: "="
    },
    link: function($scope, element, attr) {
      var demoAccuracyCircle, demoMap, demoMarker, el, updateLocation, demoMarker_test;
      el = document.createElement("div");
      element.prepend(el);
      demoMap = new google.maps.Map(el, {
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        draggable: false,
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]
      });
      demoAccuracyCircle = new google.maps.Circle({
        map: demoMap,
        fillColor: "#00B5FF",
        fillOpacity: 0,
        strokeColor: "#00B5FF",
        strokeOpacity: 0.5,
        strokeWeight: 2
      });
      demoMarker = new google.maps.Marker({
        map: demoMap
      });
      updateLocation = function() {
        var newLatLng;
        newLatLng = new google.maps.LatLng($scope.position.latitude, $scope.position.longitude);
        demoMap.setCenter(newLatLng);
        demoMarker.setPosition(newLatLng);
        demoAccuracyCircle.setCenter(newLatLng);
        return demoAccuracyCircle.setRadius($scope.position.accuracy);
      };
      return $scope.$watch("position", function() {
        return updateLocation();
      }, true);
    }
  };
});