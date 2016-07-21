angular.module("bestBuy")
    .service("lookupSvc", function ($q, $http) {

        var countryList;
        this.getCountries = function () {
            var dfd = $q.defer();
            if (countryList) {
                dfd.resolve(countryList);
            } else {
                $http.get("app/data/countries.json")
                    .then(function (response) {
                        countryList = response.data.countries;
                        dfd.resolve(countryList);
                    }).catch(function (errorResponse) {
                        dfd.reject("Error Occured");
                    })
            }
            return dfd.promise;
        };

        this.countries = [{
                name: "India",
                code: "IN"
            },
            {
                name: "Canada",
                code: "CA"
            }];
    });
