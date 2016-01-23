var app = angular.module("freemium",['ui.router']);

app.run(['$rootScope',function ($rootScope) {

    $rootScope.$on('$stateChangeSuccess',function(event,toState,fromState){
    });
}]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider,$urlRouterProvider,$locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('home');
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "template/main.html"
                })
                .state("ceva", {
                    url: "/",
                    templateUrl: "template/ceva.html"
                });
}]);

app.directive('navigation',function(){
    return{
        templateUrl:'template/nav-bar.html'
    };
});