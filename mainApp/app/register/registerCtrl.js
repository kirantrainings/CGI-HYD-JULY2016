angular.module("register")
    .controller("registerCtrl", function () {
        this.user = {};
        this.countries = [{
                name: "India",
                code: "IN"
            },
            {
                name: "Canada",
                code: "CA"
            }];
        this.registerUser = function () {
            //send data to the api.
            console.log(this.user);
        };
    });
