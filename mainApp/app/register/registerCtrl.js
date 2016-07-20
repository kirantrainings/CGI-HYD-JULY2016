angular.module("register")
    .controller("registerCtrl", function (lookupSvc) {
        this.user = {};
        this.countries = lookupSvc.countries;
        this.registerUser = function () {
            //send data to the api.
            console.log(this.user);
        };
    });
