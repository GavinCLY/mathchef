/**
 * Created by GavinCLY on 7/17/15.
 */
/**
 * Created by GavinCLY on 5/28/15.
 */
define([
    'services/services',
    '_'
], function(services) {

    /**
     *  成品 接口
     */
    services.factory('prodService', function($http, $rootScope) {
        var serviceName = '/prods';
        var service = {
            query : function(params) {
                return $http.get(serviceName, {
                    params : params
                });
            },
            get : function(id) {
                return $http.get(serviceName + '/' + id);
            },
            update : function(id, obj) {
                return $http.put(serviceName + '/' + id, obj);
            },
            save : function(obj) {
                return $http.post(serviceName, obj);
            },
            remove : function(id) {
                return $http.delete(serviceName + '/' + id);
            },

            createComb : function(obj) {
                return $http.post(serviceName + '/combs', obj);
            },
            removeComb : function(id) {
                return $http.remove(serviceName + '/combs/' + id);
            },

            updateEntireProd : function(id, obj) {
                return $http.put(serviceName + '/entity/' + id, obj);
            }
        };
        return service;
    });

});