var wageGap = angular.module('wageGap', [
  'ui.router',
  // 'ngMaterial',
  // 'material.svgAssetsCache',
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
      controller: 'SidebarController'
    })
    .state('home.bargraph', {
      templateUrl: './../sidebar/makebargraph.html',
      url: '/bargraph',
      controller: 'MakeBarGraphController'
    })
    .state('home.statesgraph', {
      templateUrl: './../sidebar/makestatesgraph.html',
      url: '/statesgraph',
      controller: 'MakeStatesGraphController'
    });
}).run(function () {

});
