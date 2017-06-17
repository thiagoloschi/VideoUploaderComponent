/*
 * jQuery File Upload Plugin Angular JS Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global window, angular */

;(function () {
    'use strict';

    var demo = angular.module('demo', ['blueimp.fileupload'])

        demo.config(
            function ($httpProvider, fileUploadProvider,$routeProvider) {
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                fileUploadProvider.defaults.redirect = window.location.href.replace(
                    /\/[^\/]*$/,
                    '/cors/result.html?%s'
                );

                $routeProvider.when('/done', {
                    controller:'ConfigController',
                    templateUrl: '../../views/done.html'
                })

                .otherwise({
                    redirectTo: '/'
                });
            }
        )
}())
