angular.module("products", []);

angular.module("products")
    .service("productSvc", function ($http) {
        this.getProducts = function () {
            return $http.get("app/data/users.json")
        };
    });


angular.module("products")
    .controller("productCtrl", function (productSvc) {
        productSvc.getProducts()
            .success(function (response) {
                console.log(response);
            })
            .error(function (response, error) {
                console.log(response);
            });
    });
