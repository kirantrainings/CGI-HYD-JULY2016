angular.module('app')
    .controller('jobListCtrl', function ($scope) {

        $scope.jobs = [{
                name: ".Net",
                description: "Need 6+ yrs expreniecne on .Net"
            },
            {
                name: "Java",
                description: "Need 6+ yrs expreniecne on Java"
            }, ];

        $scope.addJob = function (item) {
            $scope.jobs.push(item);
        }
    });
