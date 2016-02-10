var app = angular.module("freemium",['ui.router']);

app.run(['$rootScope',function ($rootScope) {

    $rootScope.$on('$stateChangeSuccess',function(event,toState,fromState){
    });
}]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider,$urlRouterProvider,$locationProvider) {
            $locationProvider.html5Mode(true);
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "template/main.html"
                })
                .state("ceva", {
                    url: "/",
                    templateUrl: "template/ceva.html"
                })
                .state('404',{
                    templateUrl:'template/404.html'
                });
            $urlRouterProvider
                .when('','/home')
                .when('/','/home')
                .otherwise(function($injector){
                    $injector.get('$state').go('404',{},{location:false});
            });
}]);

app.directive('navigation',function(){
    return{
        templateUrl:'template/nav-bar.html'
    };
});