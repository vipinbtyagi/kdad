angular.module('upcomingPayment', []).controller('upcomingPaymentController', function($scope, $http) {

    $http.get('https://jsonplaceholder.typicode.com/posts').
        then(function(response) {
            $scope.data = response.data;
    });
});
