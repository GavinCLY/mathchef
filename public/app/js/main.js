/**
 * Created by GavinCLY on 5/28/15.
 */
require.config({
    paths: {
        'jQuery' :  '../../framework/jquery.min',
        'bs' :  '../../framework/bootstrap',
        '_' : '../../framework/underscore-min',
        // angular
        'angular' : '../../framework/angular-1.4.2/angular',
        'angular-ui-router' : '../../framework/angular/angular-ui-router',
        'angular-animate' : '../../framework/angular/angular-animate/angular-animate',
        'ui-bootstrap-tpls' : '../../framework/angular/ui-bootstrap-tpls-0.11.0',
        'nestable' : '../../framework/jquery/jquery.nestable',
        'angular-xeditable' : '../../framework/angular/xeditable.min',

        // require 插件
        'domReady' : '../../framework/domReady',
        // 业务
        'bootstrap' : './bootstrap',
        'app' : './app',
        'router' : './router'
    },
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'bs' : {
            exports : 'bs',
            deps : ['jQuery']
        },
        '_' : {
            exports : '_'
        },
        // angular 插件
        'angular': {
            exports: 'angular',
            deps : ['jQuery']
        },
        'angular-ui-router' : {
            deps : ['angular']
        },
        'angular-animate' : {
            deps : ['angular', 'angular-ui-router']
        },
        'ui-bootstrap-tpls' : {
            deps : ['angular']
        },
        'angular-xeditable' : {
            deps: ['angular']
        },
        'nestable' : {
            deps : ['jQuery']
        }

    },

    deps: ['./js/bootstrap.js']
});
