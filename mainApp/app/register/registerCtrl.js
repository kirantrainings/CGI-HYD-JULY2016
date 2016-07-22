angular.module("register")
    .controller("registerCtrl", function (lookupSvc, $scope) {
        this.user = {};
        // this.countries = lookupSvc.countries;
        lookupSvc.getCountries()
            .then(function (response) {
                $scope.countries = response;
            })
            .catch(function (response) {
                console.log(response);
            });


        $scope.registerUser = function () {
            //send data to the api.
            console.log(this.user);
        };
        $scope.username = "kiran";

        setTimeout(function () {
            $scope.username = "PVS";
            $scope.$apply();
        }, 5000);


        $scope.$watch("username", function (newVal, oldVal) {
            console.log("NewValue is:" + newVal);
            console.log("OldValue is:" + oldVal)
        })
    });
