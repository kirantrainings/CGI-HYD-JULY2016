angular.module("users", [])
    .service("userSvc", function ($http) {
        this.getUsers = function () {
            return $http.get("app/data/users.json");
        };
    })
    .controller("userCtrl", function (userSvc, $scope) {
        $scope.count=2;
        $scope.showMore = function(){
          $scope.count+=2;  
        };
        userSvc.getUsers()
            .then(function (response) {
                $scope.users = response.data;
            }).catch(function (response) {
                this.errorDispaly = response;
            });
    });
