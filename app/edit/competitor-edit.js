require('./competitor-edit.less');
angular.module('competitor-edit', [])
    .controller('competitorEditCtrl', function($scope, $stateParams, $http, $q, $filter, $timeout, competitorSvc){
        var id = $stateParams.id;
        $scope.disableInfo = true;
        $scope.today = new Date();

        $scope.ranks = competitorSvc.getRanks();

        $scope.print = function(){
            competitorSvc.print(id);
        };

        $scope.weightInfo = {
            error: false,
            saved: false
        };

        $scope.datepickerOptions = {
            maxDate: $scope.today,
            datepickerMode: 'year',
            opened: false
        };

        $scope.openDatePicker = function($event) {
            $scope.datepickerOptions.opened = true;
        };

        $scope.$watch('dob', function(newVal){
            if(newVal){
                $scope.competitorInfo.dob = $filter('date')($scope.dob, 'MM/dd/yyyy');
            }
        });

        $scope.$watch('competitorInfo.weight', function(newVal, oldVal){
            if(newVal){
                if(isNaN(newVal) || newVal < 1){
                    $scope.competitorInfo.weight = oldVal;
                    $scope.disableWeightSubmit = true;
                } else {
                    $scope.disableWeightSubmit = false;
                }
            } else {
                $scope.disableWeightSubmit = true;
            }
        });

        $scope.$watch('competitorInfo.paymentamount', function(newVal, oldVal){
            if(newVal && (isNaN(newVal) || newVal < 0)){
                $scope.competitorInfo.paymentamount = oldVal;
            } else if(newVal && (newVal + "").indexOf("0") === 0){
                $scope.competitorInfo.paymentamount = 0;
            }
        });

        $scope.clubChange = function(){
            $scope.competitorInfo.judoclub = $scope.chosenClub.name;
            $scope.competitorInfo.clubcountry = $scope.chosenClub.country;
        };

        $scope.submitWeight = function(){
            if(!$scope.competitorInfo.weight || isNaN($scope.competitorInfo.weight) || $scope.competitorInfo.weight <= 0){
                $scope.weightInfo.error = true;
            } else {
                competitorSvc.updateWeight(id, $scope.competitorInfo.weight).then(function(){
                    $scope.weightInfo.saved = true;
                    $scope.weightInfo.error = false;
                }, function(){
                    $scope.weightInfo.error = true;
                    $scope.weightInfo.saved = false;
                })
            }
            init(1000);
        };

        $scope.updateInfo = function(){
            competitorSvc.updateCompetitorInfo($scope.competitorInfo).then(function(){
                $scope.infoSaved = true;
                $scope.infoError = false;
            }, function(){
                $scope.infoError = true;
                $scope.infoSaved = false;
            });
        };

        $scope.updatePayment = function(){
            competitorSvc.updatePayment(id, $scope.competitorInfo.paymentamount).then(function(){
                $scope.paymentError = false;
                $scope.paymentSaved = true;
                init(1000);
            }, function(){
                $scope.paymentError = true;
                $scope.paymentSaved = false;
            })
        };

        $scope.findWeightClasses = function(division){
            var ret;
            angular.forEach($scope.weightClasses, function(val){
                if(val.id == division){
                    ret = val.weightClasses;
                }
            });
            return ret;
        };

        $scope.updateDivisions = function(){
            competitorSvc.updateDivisions(id, $scope.competitorDivisions).then(function(){
                $scope.divisionSaved = true;
                $scope.divisionError = false;
            }, function(){
                $scope.divisionError = true;
                $scope.divisionSaved = false;
            });
        };

        var init = function(timeout){
            var update = function(){
                $q.all([
                    competitorSvc.search(id),
                    competitorSvc.getWeightClasses(),
                    competitorSvc.getCompetitorDivisions(id),
                    competitorSvc.getClubs()
                ]).then(function(responses){
                    $scope.competitorInfo = responses[0].data.data[0];
                    $scope.competitorInfo.dob = new Date($scope.competitorInfo.dob);
                    $scope.dob = new Date($scope.competitorInfo.dob);
                    $scope.competitorDivisions = responses[2].data;
                    $scope.weightClasses = responses[1].data;
                    $scope.clubs = responses[3].data;
                });
            };
            if(timeout){
                $timeout(update, timeout);
            } else {
                update();
            }
        };
        init();
    })

    .directive('divisionEdit', function(){
        return {
            scope: {
                sex: '@?',
                competitorDivisions: '=?'
            },
            controller: function($scope, competitorSvc){
                $scope.competitorDivisions = $scope.competitorDivisions ? $scope.competitorDivisions : [];

                competitorSvc.getWeightClasses().then(function(resp){
                    $scope.weightClasses = resp.data;
                });

                $scope.addDivision = function(){
                    $scope.competitorDivisions.push({division: -1, fight_up: false});
                };

                $scope.removeDivision = function(idx){
                    $scope.competitorDivisions.splice(idx, 1);
                };
            },
            template: require('./division-edit.tpl.html')
        }
    });