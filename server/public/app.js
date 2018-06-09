const app = angular.module('ListingApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/add.html'
    }).when('/buy', {
        templateUrl: 'views/buy.html'
    }).when('/rent', {
        templateUrl: 'views/rent.html'
    }).otherwise({
        template: '<h2>404 Page Not Found</h2>'
    })
});