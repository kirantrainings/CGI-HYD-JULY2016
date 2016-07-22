angular.module("bestBuy")
    .factory("lookupFact", function () {
        var countryList = [];
        return {
            getCountries: function () {
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

        };
    });
