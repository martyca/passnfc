var myApp = angular.module("Nfc", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html'
        })
      .when('/profile', {
        templateUrl: 'views/profile.html'
        })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: "loginCtrl"
        })
      .when('/logout', {
        templateUrl: 'views/logout.html'
        })
      .when('/register', {
        templateUrl: 'views/register.html'
        })
      .otherwise({
        redirectTo: "/home"
      })
    });
