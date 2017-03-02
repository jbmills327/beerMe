angular.module("rockyMtnHops", ["ngRoute"])
    .config(Router);

Router.$inject = ["$routeProvider"];

function Router($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: "/html/home.html"
        })
        .when('/contact', {
            templateUrl: "/html/contact.html"
        })
        .otherwise({
            redirectTo: "/"
        });
}
