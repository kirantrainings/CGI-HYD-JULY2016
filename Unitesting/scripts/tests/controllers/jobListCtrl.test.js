describe("Unit Testing Job List Ctrl", function () {
    var scope;
    beforeEach(function () {
        module('app');
    });
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        scope.name = "CGI";
        $controller('jobListCtrl', {
            $scope: scope
        });
    }));


    it('should have a scope defined', function () {
        expect(scope).toBeDefined()
    });

    it('scope.jobs should be defined', function () {
        expect(scope.jobs).toBeDefined();
        expect(scope.jobs.length).toEqual(2);
    });
    it('scope.addJob should add jobs to the list', function () {
        scope.addJob({
            name: "x",
            description: "y"
        });
        expect(scope.jobs.length).toEqual(2);
    });
});
