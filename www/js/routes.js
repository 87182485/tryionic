angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('main', {
        url: '/page6',
        abstract: true,
        templateUrl: 'templates/main.html'
      })
      .state('main.home', {
        url: '/page10',
        views: {
          'tab3': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('main.category', {
        url: '/page11',
        views: {
          'tab1': {
            templateUrl: 'templates/category.html'
          }
        }
      })
      .state('main.mapView', {
        url:'/mapView',
        views:{
          'tab2':{
            templateUrl:'templates/mapView.html',
            controller:'mapViewCtrl'
          }
        }
      })

      .state('main.cart', {
        url: '/page12',
        views: {
          'tab2': {
            templateUrl: 'templates/cart.html'
          }
        }
      })

      .state('main.leafRake', {
        url: '/page7',
        views: {
          'tab2': {
            templateUrl: "templates/leafRake.html",
            controller: 'leafRakeCtrl'
          }
        }
      })
      .state('main.subcategory', {
        url: '/subcategory',
        views: {
          'tab1': {
            templateUrl: "templates/subcategory.html"
          }
        }
      })
      .state('main.history', {
        url: '/history',
        views: {
          'tab4': {
            templateUrl: "templates/history.html"
          }
        }
      })

      .state('checkout', {
        url: '/checkout',
        templateUrl: 'templates/checkout.html'
      })
      ;

    // if none of the above states are matched, use this as the fallback

    $urlRouterProvider.otherwise('/page6/page10');
  });