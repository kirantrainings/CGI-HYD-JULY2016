describe("Unit tessting User list controller", function () {
    var scope;
    beforeEach(function () {
        module("app");
    });

    beforeEach(function () {
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("userListCtrl", {
                $scope: scope
            });
        })
    });

    it("$scope should be defined", function () {
        expect(scope).toBeDefined();
    });
    it("$scope.users should be defined", function () {
        expect(scope.users).toBeDefined();
        expect(scope.users.length).toEqual(2);
    });
    it("$scope.addUser add users to the list", function () {
        scope.addUser({
            name: "ABCD",
            age: "XYZ"
        });
        expect(scope.users.length).toEqual(3);
    });
});
