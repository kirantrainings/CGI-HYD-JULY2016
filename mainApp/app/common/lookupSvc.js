angular.module("bestBuy")
    .service("lookupSvc", function () {
        this.countries = [{
                name: "India",
                code: "IN"
            },
            {
                name: "Canada",
                code: "CA"
            }];
    });
