app.factory('DataService',['$http',function($http){
    var urlBase = '/api/';
    var dataService={};
    dataService.getPermissions = function(){
        return 0;
    };

    return dataService;
}]);