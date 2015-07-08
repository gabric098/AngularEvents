angular.module('Navigation', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider

                .state('home.navigation', {
                    url: 'nav',
                    controller: 'NavigationController',
                    templateUrl: 'components/Navigation/navigation.html'
                });

        }]);