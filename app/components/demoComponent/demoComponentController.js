angular
    .module('BetslipPoc')
    .controller('demoComponentController', demoComponentController);

demoComponentController.$inject = ['$scope', 'applicationModelFactory'];

function demoComponentController($scope, applicationModelFactory) {
    $scope.navigation = '';
    var callback = function() {
        $scope.navigation = applicationModelFactory.getProperty('navigation');
    };
    applicationModelFactory.registerObserverCallback(callback);
}
