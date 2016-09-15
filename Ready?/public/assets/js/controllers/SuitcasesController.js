(function() {
  angular.module('ready').controller('SuitcasesController', [
    '$scope', '$timeout',
    function($scope, $timeout) {
      $scope.suitcases = [];

      // Read all suitcases
      firebase.database()
      .ref('suitcases')
      .on('value', function(snapshot) {
        $timeout(function() {
          $scope.suitcases = [];

          var suitcases = snapshot.val();

          if (suitcases) {
            Object.keys(suitcases).forEach(function(key) {
              suitcases[key].key = key;

              $scope.suitcases.push(suitcases[key]);
            });
          }
        }, $delay);
      });
    }
  ]);
})(angular.window);
