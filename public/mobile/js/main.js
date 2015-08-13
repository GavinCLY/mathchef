/**
 * Created by GavinCLY on 5/28/15.
 */
require.config({
    paths: {
        '_' : '../../framework/underscore-min',
        // angular
        'angular' : '../../framework/angular-1.4.2/angular',
        'angular-ui-router' : '../../framework/angular/angular-ui-router',
        'mobile-angular-ui' : '../../framework/mobile/mobile-angular-ui',

        // require 插件
        'domReady' : '../../framework/domReady',
        // 业务
        'bootstrap' : './bootstrap',
        'app' : './app',
        'router' : './router'
    },
    shim: {

        // angular 插件
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router' : {
            deps : ['angular']
        },
        'mobile-angular-ui' : {
            deps : ['angular', 'angular-ui-router']
        }

    },

    deps: ['./js/bootstrap.js']
});
