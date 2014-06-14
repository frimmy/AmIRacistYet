'use strict';

/* Services */

/* TODO retreive JSON app from provided route and set to $scope.questions variable*/
angular.module('comedyhackApp.services', [])
    .factory('mediaMathAPIService', function($http) {
        $http.defaults.useXDomain = true;
        var mediaMathAPI = {};
        var myApiToken = '58a6d24f37652d67a0eeb47e6505bb33409c7eae';

        // Retrieve Media Math agencies 
        mediaMathAPI.getAgencies = function() {
            return $http({
                method: 'GET',
                url: 'http://challenge.mediamath.com/api/agencies',
                params: {
                    api_token: myApiToken,
                }
            });
        };


        return mediaMathAPI;
    });
