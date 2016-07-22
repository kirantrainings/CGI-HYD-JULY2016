describe('Test-Job List Controller', function () {
    var usdScope, usdCtrl;

    beforeEach(function () {
        module('app');
    });
    beforeEach(inject(function ($rootScope, $controller) {
        usdScope = $rootScope.$new();

        usdCtrl = $controller('jobListCtrl', {

        });
    }));


    describe('controller testing', function () {

        it('controller should not be null', function () {
            expect(usdCtrl).toBeDefined();
        });

        it('controller should have jobs', function () {
            expect(usdCtrl.jobs).toBeDefined();
        });

        it('Job length should be equal to 2', function () {
            expect(usdCtrl.jobs.length).toBe(2);
        });

        it('Adding a job should make jobs to 3', function () {
            var job = {
                name: '.angulars',
                description: "we have an opening for .angulars"
            };
            usdCtrl.addJob(job);
            expect(usdCtrl.jobs.length).toBe(3);
        });
    });
});
