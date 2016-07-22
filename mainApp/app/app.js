//Creating the module

angular.module("bestBuy", ["register", "products", "users", "components"]);

angular.module("bestBuy")
    .config(function () {
        console.log("I am the root");
    });
angular.module("bestBuy")
    .run(function () {
        console.log("I am the root run");
    });
