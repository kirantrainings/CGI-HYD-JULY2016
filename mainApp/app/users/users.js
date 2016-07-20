angular.module("users", [])
    .service("userSvc", function ($http) {
        this.getUsers = function () {
            return $http.get("app/data/users.json");
        };
    })
    .controller("userCtrl", function (userSvc, $scope) {

        userSvc.getUsers()
            .then(function (response) {
                $scope.users = response.data;
            }).catch(function (response) {
                this.errorDispaly = response;
            });
    });
