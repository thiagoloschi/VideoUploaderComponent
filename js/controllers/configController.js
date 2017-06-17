var demo = angular.module('demo', ['blueimp.fileupload'])

demo.controller('ConfigController', [
    '$scope', '$http', '$filter', '$window', 'fileUpload',
    function ($scope, $http, fileUpload) {
        $scope.options = {
            url: 'https://upload.wistia.com/',
            type: 'POST',
            formData: [{
                name: 'api_password',
                value: 'c6a2e427af20d063d47896217ef66bba874200447e65ac50e5ff8372db235adb'
            }],
            acceptFileTypes: /(\.|\/)(mp4|avi|ogg)$/i,
        };

        $scope.fileuploaded = false;

        $scope.proccess = function(file) {
            $scope.fileuploaded = true;
            file.$processing();
        }

        $scope.upload = function(file){
            file.$submit().then(function(success) {
                console.log(success);
                $scope.video = success;
            }, function(err) {
                console.log('err\n',err);
            });
        }

    }
])
