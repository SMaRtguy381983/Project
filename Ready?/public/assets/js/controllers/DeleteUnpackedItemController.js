(function() {
  angular.module('ready')
  .controller('DeleteUnpackedItemController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.pageTitle = 'Delete an Unpacked Item';
      $scope.suitcaseKey = $routeParams.suitcaseKey;
      $scope.unpackedItemKey = $routeParams.unpackedItemKey;
      $scope.goBack = `#/suitcases/${$scope.suitcaseKey}#unpacked-items`;

      $scope.item = {};
      $scope.confirmInput = '';

      var ref = `suitcases/${$scope.suitcaseKey}/unpackedItems/` +
      $scope.unpackedItemKey;

      // Read an unpackedItem
      firebase.database()
      .ref(ref)
      .on('value', function(snapshot) {
        $timeout(function() {
          $scope.item = snapshot.val();
        }, $delay);
      });

      // Delete an unpackedItem
      $scope.onSubmit = function() {
        if ($scope.confirmInput === $scope.item.name) {
          firebase.database()
          .ref(ref)
          .set({});

          $scope.item = {};

          $scope.confirmInput = '';

          document.location.hash = `/suitcases/${$scope.suitcaseKey}#unpacked-items`;
        } else {
          console.log('the unpackedItem name did not match');
        }
      };
    }
  ]);
})(angular.window);
