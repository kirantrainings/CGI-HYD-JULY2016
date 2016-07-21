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

angular.module("components")
    .directive("alphabetsOnly", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                function alphabets(evt) {
                    if ((evt.keyCode >= 97 && evt.keyCode <= 122) ||
                        (evt.keyCode >= 65 && evt.keyCode <= 90) ||
                        evt.keyCode == 32) {

                    } else {
                        evt.preventDefault();
                    }
                }
                element.bind("keypress", alphabets);
            }
        }
    });
