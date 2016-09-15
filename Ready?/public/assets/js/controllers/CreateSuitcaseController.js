(function() {
  angular.module('ready')
  .controller('CreateSuitcaseController', [
    '$scope', '$timeout',
    function($scope, $timeout) {
      $scope.pageTitle = 'Create a Suitcase';
      $scope.buttonText = 'Create';

      $scope.suitcase = {};

      // Create a suitcase
      $scope.onSubmit = function() {
        firebase.database()
        .ref('suitcases')
        .push($scope.suitcase);

        $scope.suitcase = {};

        document.location.hash = `/suitcases#suitcases`;
      };
    }
  ]);
})(angular.window);
