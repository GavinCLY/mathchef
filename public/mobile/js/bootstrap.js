define([
    'domReady',
    'angular',
    'app',
    'router'
],function(domReady,angular){
    'use strict';
    domReady(function(document){
        angular.bootstrap(document, ['app']);
    });
});