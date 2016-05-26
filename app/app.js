'use strict';
require('./search/competitor-search');
require('./edit/competitor-edit');
require('angular-ui-router');
require('angular-material');
require('angular-ui-bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
angular.module('amcan-admin-master', ['ui.router', 'competitor-search', 'competitor-edit', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('search', {
                url: "/",
                template: require('./search/competitor-search.tpl.html'),
                controller: 'competitorSearchCtrl'
            })
            .state('competitor', {
                url: '/competitor/:id',
                template: require('./edit/competitor-edit.tpl.html'),
                controller: 'competitorEditCtrl'
            });
    })

    .service('competitorSvc', function($http, $window){
        var BASE_PATH = '/admin/competitoredit';
        this.search = function(id){
            return $http({
                method: 'GET',
                url: BASE_PATH + '/searchcompetitors.php',
                params: {
                    id: id
                }
            });
        };

        this.updateWeight = function(id, weight){
            return $http({
                method: 'POST',
                url: BASE_PATH + '/weightupdate.php',
                params: {
                    id: id,
                    weight: weight
                }
            });
        };

        this.updatePayment = function(id, amountPaid){
            return $http({
                method: 'POST',
                url: BASE_PATH + '/paymentupdate.php',
                params: {
                    id: id,
                    amountPaid: amountPaid
                }
            });
        };

        this.getWeightClasses = function() {
            return $http({
                method: 'GET',
                url: BASE_PATH + '/weightclasses.php'
            });
        };

        this.getCompetitorDivisions = function(id) {
            return $http({
                method: 'GET',
                url: BASE_PATH + '/playerdivisions.php',
                params: {
                    id: id
                }
            });
        };

        this.updateDivisions = function(id, divisions) {
            return $http({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                url: BASE_PATH + '/divisionupdate.php',
                data: {
                    divisions: divisions
                },
                params: {
                    id: id
                }
            });
        };

        this.getClubs = function(){
            return $http({
                method: 'GET',
                url: BASE_PATH + '/clubs.php'
            });
        };

        this.updateCompetitorInfo = function(info){
            return $http({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                url: BASE_PATH + '/competitorupdate.php',
                data: {
                    info: info
                }
            });
        };

        this.addCompetitor = function(info, divisions){
            return $http({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                url: BASE_PATH + '/quickaddcompetitor.php',
                data: {
                    info: info,
                    divisions: divisions
                }
            })
        };

        this.getRanks = function(){
            return [{
                label: "Any Junior Rank",
                value: "Junior Rank"
            }, {
                label: "Senior - Rokkyu (6th)",
                value: "Senior - Rokkyu (6th)"
            }, {
                label: "Senior - Gokyu (5th)",
                value: "Senior - Gokyu (5th)"
            }, {
                label: "Senior - Yonkyu (4th)",
                value: "Senior - Yonkyu (4th)"
            }, {
                label: "Senior - Sankyu (3rd)",
                value: "Senior - Sankyu (3rd)"
            }, {
                label: "Senior - Nikkyu (2nd)",
                value: "Senior - Nikkyu (2nd)"
            }, {
                label: "Senior - Ikkyu (1st)",
                value: "Senior - Ikkyu (1st)"
            }, {
                label: "Senior - Shodan (1st)",
                value: "Senior - Shodan (1st)"
            }, {
                label: "Senior - Nidan (2nd)",
                value: "Senior - Nidan (2nd)"
            }, {
                label: "Senior - Sandan (3rd)",
                value: "Senior - Sandan (3rd)"
            }, {
                label: "Senior - Yodan (4th)",
                value: "Senior - Yodan (4th)"
            }, {
                label: "Senior - Godan (5th)",
                value: "Senior - Godan (5th)"
            }, {
                label: "Senior - Rokudan (6th)",
                value: "Senior - Rokudan (6th)"
            }, {
                label: "Senior - Shichidan (7th)",
                value: "Senior - Shichidan (7th)"
            }, {
                label: "Senior - Hachidan (8th)",
                value: "Senior - Hachidan (8th)"
            }, {
                label: "Senior - Kudan (9th)",
                value: "Senior - Kudan (9th)"
            }, {
                label: "Senior - Judan (10th)",
                value: "Senior - Judan (10th)"
            }];
        };

        this.export = function(division){
            $window.location = BASE_PATH + '/export.php?division=' + division;
        };

        this.print = function(id){
            $window.location = BASE_PATH + '/print.php' + (id ? ('?id=' + id) : '');
        };
    });

