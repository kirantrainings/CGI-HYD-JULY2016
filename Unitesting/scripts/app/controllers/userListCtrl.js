angular.module("app")
    .controller("userListCtrl", ["$scope", function ($scope) {
        $scope.users = [{
            name: "Kiran",
            job: "trainig"
        }, {
            name: "ravi",
            job: "testert"
        }];
        $scope.addUser = function (user) {
            $scope.users.push(user);
        };
}]);
