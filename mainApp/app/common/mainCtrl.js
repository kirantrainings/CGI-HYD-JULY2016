angular.module("bestBuy")
    .controller("mainCtrl", function ($scope, $rootScope) {
        this.headerUrl = "app/common/header.html";
        this.footerUrl = "app/common/footer.html";
        this.contentUrl = "";
        $scope.companyname = "CGI";
        this.loadContent = function (contentType) {
            if (contentType == 'register') {
                this.contentUrl = "app/register/register.html";
            } else if (contentType == 'login') {
                this.contentUrl = "app/login/login.html";
            } else if (contentType == "home") {
                this.contentUrl = "app/home/home.html";
            } else if (contentType == "products") {
                this.contentUrl = "app/products/products.html";
            } else if (contentType == "cart") {
                this.contentUrl = "app/products/cart.html";
            } else if (contentType == "users") {
                this.contentUrl = "app/users/users.html";
            } else {
                this.contentUrl = "app/register/register.html";
            }
        }
        $scope.count = 0;
        $rootScope.$on("PRODUCT-ADDED", function (evet, args) {
            $scope.count++;
        });
    });
