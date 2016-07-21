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


angular.module("components")
    .directive("customClick", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                function handleClick() {
                    scope.$eval(attrs["customClick"]);
                }
                element.bind("click", handleClick);
            }
        }
    });

angular.module("components")
    .directive("easyDatePicker", function () {
        return {
            restirct: "A",
            link: function (scope, element, attrs) {
                //custom-min-date
                //custom-max-date
                var config = {};
                if (attrs["min"]) {
                    config.minDate = attrs["min"];
                }
                if (attrs["max"]) {
                    config.maxDate = attrs["max"];
                }
                element.datepicker(config);
            }
        }
    });
