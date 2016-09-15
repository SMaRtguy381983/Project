(function() {
  angular.module('ready').controller('SuitcaseController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.suitcaseKey = $routeParams.suitcaseKey;

      $scope.unpackedItems = [];

      // Read all unpackedItems
      firebase.database()
      .ref(`suitcases/${$scope.suitcaseKey}/unpackedItems`)
      .on('value', function(snapshot) {
        $timeout(function() {
          $scope.unpackedItems = [];

          var unpackedItems = snapshot.val();

          if (unpackedItems) {
            Object.keys(unpackedItems).forEach(function(key) {
              unpackedItems[key].key = key;

              $scope.unpackedItems.push(unpackedItems[key]);
            });
          }
        }, $delay);
      });

      // Pack an unpacked item
      $scope.onTick = function(unpackedItem) {
        firebase.database()
        .ref(`suitcases/${$scope.suitcaseKey}/packedItems/` +
          unpackedItem.key)
        .set(unpackedItem);

        firebase.database()
        .ref(`suitcases/${$scope.suitcaseKey}/unpackedItems/` +
          unpackedItem.key)
        .set({});
      };
    }
  ]);
})(angular.window);
