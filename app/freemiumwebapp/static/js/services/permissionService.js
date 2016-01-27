app.factory('PermissionService',['DataService',function(DataService){
    var permissionService={};
    var permissions;

    permissionService.loadPermissions = function(){
        permissions = DataService.getPermissions();
    };

    permissionService.hasPermission = function(){
        return 0;
    };

    return permissionService;
}]);