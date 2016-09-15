(function() {
  angular.module('ready')
  .controller('CreateUnpackedItemController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.pageTitle = 'Create an Unpacked Item';
      $scope.buttonText = 'Create';
      $scope.goBack = `#/suitcases/${$scope.suitcaseKey}#unpacked-items`;

      $scope.suitcaseKey = $routeParams.suitcaseKey;
      $scope.item = {};

      // Create an unpackedItem
      $scope.onSubmit = function() {
        firebase.database()
        .ref(`suitcases/${$scope.suitcaseKey}/unpackedItems`)
        .push($scope.item);

        $scope.item = {};

        document.location.hash = `/suitcases/${$scope.suitcaseKey}#unpacked-items`;
      };
    }
  ]);
})(angular.window);
