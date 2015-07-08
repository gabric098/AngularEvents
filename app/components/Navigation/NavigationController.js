angular
    .module('Navigation')
    .controller('NavigationController', NavigationController);

NavigationController.$inject = ['$scope', 'applicationModelFactory'];

function NavigationController($scope, applicationModelFactory) {
    $scope.addProp = function(propName, propValue) {
        applicationModelFactory.setProperty(propName, propValue);
    };
}
