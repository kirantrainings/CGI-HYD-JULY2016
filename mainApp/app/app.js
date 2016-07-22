//Creating the module

angular.module("bestBuy", ["register", "products", "users", "components", "ui.router"]);

angular.module("bestBuy")
    .config(function ($stateProvider) {
        //state defnition
        var register = {
            templateUrl: "app/register/register.html",
            controller: "registerCtrl"
        };
        var products = {
            templateUrl: "app/products/products.html",
            controller: "productCtrl",
            resolve: {
                products: function (productSvc) {
                    return productSvc.getProducts();
                }
            }
        };
        var cart = {
            templateUrl: "app/products/cart.html",
            controller: "cartCtrl",
            params: {
                data: ""
            }
        };
        //s
        //state registration

        $stateProvider.state("register", register);
        $stateProvider.state("products", products);
        $stateProvider.state("cart", cart);


    });
angular.module("bestBuy")
    .run(function ($state, $rootScope) {
        $rootScope.$on("$stateChangeSuccess",
            function (event,
                toState,
                toParams, fromState, fromParams, options) {

                console.log(toState);
                console.log(fromState);
            });



        console.log("I am the root run");
        $state.go("products");
    });
