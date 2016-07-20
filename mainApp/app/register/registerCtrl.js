angular.module("register")
    .controller("registerCtrl", function () {
        this.user = {};

        this.registerUser = function () {
            //send data to the api.
            console.log(this.user);
        };
    });
