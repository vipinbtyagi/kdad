angular.module('updatesActionsApp', []).controller('updatesActionsController', function($scope, $http) {

    $http.get('https://jsonplaceholder.typicode.com/posts').
        then(function(response) {
            $scope.data = response.data;

    });
});
