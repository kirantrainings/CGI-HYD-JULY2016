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


        this.registerUser = function () {
            //send data to the api.
            console.log(this.user);
        };
    });
