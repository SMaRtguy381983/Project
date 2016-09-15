var $delay = 100;

(function() {
  angular.module('ready', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: './views/index.html',
      controller: 'IndexController',
    })

    .when('/contactUs', {
      templateUrl: './views/contact-us.html',
      controller: 'ContactUsController',
    })

    .when('/passport', {
      templateUrl: './views/passport.html',
      controller: 'PassportController',
    })

    // http://localhost:5000/#/suitcases
    .when('/suitcases', {
      templateUrl: './views/suitcases.html',
      controller: 'SuitcasesController',
    })

    // http://localhost:5000/#/suitcases/create
    .when('/suitcases/create', {
      templateUrl: './views/suitcase-form.html',
      controller: 'CreateSuitcaseController',
    })

    // http://localhost:5000/#/suitcases/0
    .when('/suitcases/:suitcaseKey', {
      templateUrl: './views/suitcase.html',
      controller: 'SuitcaseController',
    })

    // http://localhost:5000/#/suitcases/0/delete
    .when('/suitcases/:suitcaseKey/delete', {
      templateUrl: './views/delete-suitcase-form.html',
      controller: 'DeleteSuitcaseController',
    })

    // http://localhost:5000/#/suitcases/0/update
    .when('/suitcases/:suitcaseKey/update', {
      templateUrl: './views/suitcase-form.html',
      controller: 'UpdateSuitcaseController',
    })

    // http://localhost:5000/#/suitcases/0/unpackedItems/create
    .when('/suitcases/:suitcaseKey/unpackedItems/create', {
      templateUrl: './views/item-form.html',
      controller: 'CreateUnpackedItemController',
    })

    // http://localhost:5000/#/suitcases/0/unpackedItems/0/delete
    .when('/suitcases/:suitcaseKey/unpackedItems/:unpackedItemKey/delete', {
      templateUrl: './views/delete-item-form.html',
      controller: 'DeleteUnpackedItemController',
    })

    // http://localhost:5000/#/suitcases/0/unpackedItems/0/update
    .when('/suitcases/:suitcaseKey/unpackedItems/:unpackedItemKey/update', {
      templateUrl: './views/item-form.html',
      controller: 'UpdateUnpackedItemController',
    })

    // http://localhost:5000/#/suitcases/0/packedItems
    .when('/suitcases/:suitcaseKey/packedItems', {
      templateUrl: './views/packed-suitcase.html',
      controller: 'PackedSuitcaseController',
    })

    // http://localhost:5000/#/suitcases/0/packedItems/0/delete
    .when('/suitcases/:suitcaseKey/packedItems/:packedItemKey/delete', {
      templateUrl: './views/delete-item-form.html',
      controller: 'DeletePackedItemController',
    })

    // http://localhost:5000/#/suitcases/0/packedItems/0/update
    .when('/suitcases/:suitcaseKey/packedItems/:packedItemKey/update', {
      templateUrl: './views/item-form.html',
      controller: 'UpdatePackedItemController',
    })

    .otherwise({ redirectTo: '/index' });
  })
  .service('MainService', function() {

  });
})(angular.window);
