(function() {
  angular.module('ready')
  .controller('UpdatePackedItemController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.pageTitle = 'Update a Packed Item';
      $scope.buttonText = 'Update';
      $scope.goBack = `#/suitcases/${$scope.suitcaseKey}/packedItems#packed-items`;

      $scope.suitcaseKey = $routeParams.suitcaseKey;
      $scope.packedItemKey = $routeParams.packedItemKey;

      $scope.item = {};

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

      // Update a packedItem
      $scope.onSubmit = function() {
        firebase.database()
        .ref(ref)
        .update($scope.item);

        $scope.item = {};

        document.location.hash = `/suitcases/${$scope.suitcaseKey}/packedItems#packed-items`;
      };
    }
  ]);
})(angular.window);
