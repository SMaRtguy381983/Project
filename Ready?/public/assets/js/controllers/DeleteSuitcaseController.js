(function() {
  angular.module('ready')
  .controller('DeleteSuitcaseController', [
    '$scope', '$timeout', '$routeParams',
    function($scope, $timeout, $routeParams) {
      $scope.suitcaseKey = $routeParams.suitcaseKey;

      $scope.suitcase = {};
      $scope.confirmInput = '';

      var ref = `suitcases/${$scope.suitcaseKey}`;

      // Read a suitcase
      firebase.database()
      .ref(ref)
      .on('value', function(snapshot) {
        $timeout(function() {
          $scope.suitcase = snapshot.val();
        }, $delay);
      });

      // Delete a suitcase
      $scope.onSubmit = function() {
        if ($scope.confirmInput === $scope.suitcase.name) {
          firebase.database()
          .ref(ref)
          .set({});

          $scope.suitcase = {};

          $scope.confirmInput = '';

          document.location.hash = `/suitcases#suitcases`;
        } else {
          console.log('the suitcase name did not match');
        }
      };
    }
  ]);
})(angular.window);
