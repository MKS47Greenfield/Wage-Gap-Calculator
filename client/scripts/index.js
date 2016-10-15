var wageGap = angular.module('wageGap', [
  'ui.router',
  'wageGap.sidebar',
  'wageGap.makestatesgraph',
  'wageGap.makebargraph'
  // 'wageGap.landing'
])
.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './../index.html',
      url: '/',
      controller: 'HomeController'
    })
    .state('landing.bargraph', {
      templateUrl: './../sidebar/makebargraph.html',
      url: '/bargraph',
      controller: 'MakeBarGraphController'
    })
    .state('landing.statesgraph', {
      templateUrl: './../sidebar/makestatesgraph.html',
      url: '/statesgraph',
      controller: 'MakeStatesGraphController'
    });
}).run(function () {
  
});
