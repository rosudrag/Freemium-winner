app.controller('mainTableCtrl',['uiGridConstants'],function($scope,uiGridConstants) {
    $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: true,
        columnDefs: columnDefinitions,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };

    $scope.columnDefinitions = [
        {field: 'name', filters: [{placeholder: 'Task Name'}]},
        {field: 'link', filters: [{placeholder: 'Link URL'}]},
        {field: 'owner', enableCellEdit: false, filters: [{placeholder: 'Owner Name'}]},
        {
            field: 'attempted',
            enableCellEdit: false,
            filters: [{
                condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                placeholder: '>='
            }, {condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL, placeholder: '<='}]
        },
        {
            field: 'won',
            enableCellEdit: false,
            filters: [{
                condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                placeholder: '>='
            }, {condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL, placeholder: '<='}]
        },
        {
            field: 'date',
            enableCellEdit: false,
            filters: [{
                condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL,
                placeholder: '>='
            }, {condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL, placeholder: '<='}]
        }];
});
    //$scope.rows = ['Exemplu 1','Exemplu 2','Exemplu 3'];
    //$scope.temp = false;
    //
    //$scope.addRow = function(){
    //    $scope.temp = false;
    //    $scope.addName="";
    //};
    //
    //$scope.deleteRow = function(row){
    //    $scope.rows.splice($scope.rows.indexOf(row),1);
    //};
    //
    //$scope.plural = function (tab){
    //    return tab.length > 1 ? 's': '';
    //};
    //
    //$scope.addTemp = function(){
    //    if($scope.temp) $scope.rows.pop();
    //    else if($scope.addName) $scope.temp = true;
    //
    //    if($scope.addName) $scope.rows.push($scope.addName);
    //    else $scope.temp = false;
    //};
    //
    //$scope.isTemp = function(i){
    //    return i==$scope.rows.length-1 && $scope.temp;
    //};