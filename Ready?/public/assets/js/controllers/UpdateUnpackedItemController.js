(function() {
  angular.module('ready')
  .controller('UpdateUnpackedItemController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.pageTitle = 'Update an Unpacked Item';
      $scope.buttonText = 'Update';
      $scope.goBack = `#/suitcases/${$scope.suitcaseKey}#unpacked-items`;

      $scope.suitcaseKey = $routeParams.suitcaseKey;
      $scope.unpackedItemKey = $routeParams.unpackedItemKey;

      $scope.item = {};

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

      // Update an unpackedItem
      $scope.onSubmit = function() {
        firebase.database()
        .ref(ref)
        .update($scope.item);

        $scope.item = {};

        document.location.hash = `/suitcases/${$scope.suitcaseKey}#unpacked-items`;
      };
    }
  ]);
})(angular.window);
