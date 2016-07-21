angular.module("components", []);

//brandName directive
angular.module("components")
    .directive("brandName", function () {
        return {
            template: "<lable>{{companyname}}</label>"
        };
    });

//brandName directive
angular.module("components")
    .directive("customHeader", function () {
        return {
            templateUrl: "app/components/customheader.html",
            restrict: "AEC"
        };
    });
