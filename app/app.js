angular.module(
    'BetslipPoc',
    ['ui.router', 'Navigation']
)

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                controller: 'demoComponentController',
                templateUrl: 'components/home.html'
            });

    }]);