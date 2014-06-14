'use strict';

/* Directives */

// TODO: if necessary to create questions element, here's where it'd happen!
angular.module('comedyhackApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
