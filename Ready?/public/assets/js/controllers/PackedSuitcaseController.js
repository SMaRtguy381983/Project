(function() {
  angular.module('ready').controller('PackedSuitcaseController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.suitcaseKey = $routeParams.suitcaseKey;
      $scope.packedItems = [];

      // Read all packedItems
      firebase.database()
      .ref(`suitcases/${$scope.suitcaseKey}/packedItems`)
      .on('value', function(snapshot) {
        $timeout(function() {
          $scope.packedItems = [];

          var packedItems = snapshot.val();

          if (packedItems) {
            Object.keys(packedItems).forEach(function(key) {
              packedItems[key].key = key;

              $scope.packedItems.push(packedItems[key]);
            });
          }
        }, $delay);
      });

      // Unpack a packed item
      $scope.onTick = function(packedItem) {
        firebase.database()
        .ref(`suitcases/${$scope.suitcaseKey}/unpackedItems/` +
          packedItem.key)
        .set(packedItem);

        firebase.database()
        .ref(`suitcases/${$scope.suitcaseKey}/packedItems/` +
          packedItem.key)
        .set({});
      };
    }
  ]);
})(angular.window);
