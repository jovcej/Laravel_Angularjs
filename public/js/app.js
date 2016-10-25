var commentApp = angular.module('commentApp', ['ngRoute']);

commentApp.config(function($routeProvider) {
   $routeProvider
      // .when('/login', {
      //     templateUrl : 'js/views/login.html',
      //     controller  : ''
      // })
      // .when('/register', {
      //     templateUrl : 'js/views/register.html',
      //     controller  : ''
      // })
       .when('/comments', {
           templateUrl : 'js/views/comments.html',
           controller  : 'mainController'
       })
       .when('/stats', {
           templateUrl : 'js/views/stats.html',
           controller  : 'statsController'
       })
       .when('/about', {
           templateUrl : 'js/views/about.html',
           controller  : 'aboutController'
       })
       .otherwise({
         redirectTo: '/comments'
       });
});
