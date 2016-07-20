angular.module("bestBuy")
    .controller("mainCtrl", function () {
        this.headerUrl = "app/common/header.html";
        this.footerUrl = "app/common/footer.html";
        this.contentUrl = "";

        this.loadContent = function (contentType) {
            if (contentType == 'register') {
                this.contentUrl = "app/register/register.html";
            } else if (contentType == 'login') {
                this.contentUrl = "app/login/login.html";
            } else if (contentType == "home") {
                this.contentUrl = "app/home/home.html";
            } else if (contentType == "products") {
                this.contentUrl = "app/products/products.html";
            } else {
                this.contentUrl = "app/register/register.html";
            }
        }
    });
