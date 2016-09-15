(function() {
  angular.module('ready')
  .controller('UpdateSuitcaseController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.pageTitle = 'Update a Suitcase';
      $scope.buttonText = 'Update';

      $scope.suitcaseKey = $routeParams.suitcaseKey;

      $scope.suitcase = {};

      var ref = `suitcases/${$scope.suitcaseKey}`;

      // Read a suitcase
      firebase.database()
      .ref(ref)
      .on('value', function(snapshot) {
        $timeout(function() {
          $scope.suitcase = snapshot.val();
        }, $delay);
      });

      // Update a suitcase
      $scope.onSubmit = function() {
        firebase.database()
        .ref(ref)
        .update($scope.suitcase);

        $scope.suitcase = {};

        document.location.hash = `/suitcases#suitcases`;
      };
    }
  ]);
})(angular.window);
