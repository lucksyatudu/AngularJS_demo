angular.module('myApp', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "demo.html",
      controller: "AppCtrl",
      //controllerAs: "app"
    }
  );
})

.controller('AppCtrl', function() {
  var self = this;
  self.message = "The app routing is working!";
});
