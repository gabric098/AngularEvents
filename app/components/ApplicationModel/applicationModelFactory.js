angular
    .module('BetslipPoc')
    .factory('applicationModelFactory', applicationModelFactory);

    function applicationModelFactory() {

        var appModel = {
            "state1": "one",
            "state2": "two"
        };

        var observerCallbacks = [];

        var service = {
            getProperty: getProperty,
            setProperty: setProperty,
            printAppModel: printAppModel,
            registerObserverCallback: registerObserverCallback
        };

        return service;

        function getProperty(name) {
            return appModel[name];
        }

        function setProperty(name, value) {
            appModel[name] = value;
            notifyObservers();
        }

        function printAppModel() {
            console.log(appModel);
        }

        // observers methods
        //register an observer
        function registerObserverCallback(callback){
            observerCallbacks.push(callback);
        }

        //call this when you know 'foo' has been changed
        function notifyObservers(){
            angular.forEach(observerCallbacks, function(callback){
                callback();
            });
        }
    }