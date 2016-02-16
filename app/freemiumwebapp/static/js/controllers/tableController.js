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
                condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL, placeholder: '>='},
                {condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL, placeholder: '<='}]
        },
        {
            field: 'won',
            enableCellEdit: false,
            filters: [{condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL, placeholder: '>='},
                {condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL, placeholder: '<='}]
        },
        {
            field: 'date',
            enableCellEdit: false,
            filters: [{condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL, placeholder: '>='},
                {condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL, placeholder: '<='}]
        }];
});