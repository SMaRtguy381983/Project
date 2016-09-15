(function() {
  angular.module('ready')
  .controller('DeletePackedItemController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.pageTitle = 'Delete a Packed Item';
      $scope.suitcaseKey = $routeParams.suitcaseKey;
      $scope.packedItemKey = $routeParams.packedItemKey;
      $scope.goBack = `#/suitcases/${$scope.suitcaseKey}/packedItems#packed-items`;

      $scope.item = {};
      $scope.confirmInput = '';

      var ref = `suitcases/${$scope.suitcaseKey}/packedItems/` +
      $scope.packedItemKey;

      // Read a packedItem
      firebase.database()
      .ref(ref)
      .on('value', function(snapshot) {
        $timeout(function() {
          $scope.item = snapshot.val();
        }, $delay);
      });

      // Delete a packedItem
      $scope.onSubmit = function() {
        console.log($scope.confirmInput);
        console.log($scope.item.name);
        if ($scope.confirmInput === $scope.item.name) {
          firebase.database()
          .ref(ref)
          .set({});

          $scope.item = {};

          $scope.confirmInput = '';

          document.location.hash = `/suitcases/${$scope.suitcaseKey}/packedItems#packed-items`;
        } else {
          console.log('the packedItem name did not match');
        }
      };
    }
  ]);
})(angular.window);
