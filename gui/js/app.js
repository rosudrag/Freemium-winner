var app = angular.module("freemium",['ui.router']);

app.run(['$rootScope', '$state', '$stateParams',function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);

app.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,   $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "html/main.html"
                })
                .state("ceva", {
                    url: "/ceva",
                    templateUrl: "html/ceva.html"
                });
        }
    ]
);

app.controller('mainTableCtrl',function($scope){
    $scope.rows = ['Exemplu 1','Exemplu 2','Exemplu 3'];
    $scope.temp = false;

    $scope.addRow = function(){
        $scope.temp = false;
        $scope.addName="";
    };

    $scope.deleteRow = function(row){
        $scope.rows.splice($scope.rows.indexOf(row),1);
    };

    $scope.plural = function (tab){
        return tab.length > 1 ? 's': '';
    };

    $scope.addTemp = function(){
        if($scope.temp) $scope.rows.pop();
        else if($scope.addName) $scope.temp = true;

        if($scope.addName) $scope.rows.push($scope.addName);
        else $scope.temp = false;
    };

    $scope.isTemp = function(i){
        return i==$scope.rows.length-1 && $scope.temp;
    };
});

app.directive('navigation',function(){
    return{
        templateUrl:'html/nav-bar.html'
    };
});