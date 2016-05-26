require('angular-ui-grid/ui-grid.js');
require('angular-ui-grid/ui-grid.css');
var app = angular.module("competitor-search", ["ui.grid"])
    .controller("competitorSearchCtrl", function ($scope, $http, $location, competitorSvc, $uibModal, $window) {
        $scope.gridOptions = {
            data: 'data',
            enableFiltering: true,
            showGridFooter: true,
            rowTemplate: '<div ng-click="grid.appScope.editRecord(row.entity)" ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell row-selectable" ui-grid-cell></div>',
            columnDefs: [
                {
                    field: "firstname",
                    displayName: "First Name"
                }, {
                    field: "lastname",
                    displayName: "Last Name"
                }, {
                    field: "fulladdress",
                    displayName: "Address"
                }, {
                    field: "cellphone",
                    displayName: "Cell#"
                }, {
                    field: "email",
                    displayName: "Email"
                }, {
                    field: "age",
                    displayName: "Age",
                    type: "number",
                    filters: [{
                        condition: function (term, value) {
                            return parseInt(value) >= parseInt(term);
                        },
                        placeholder: ">="
                    }, {
                        condition: function (term, value) {
                            return parseInt(value) <= parseInt(term);
                        },
                        placeholder: "<="
                    }]
                }, {
                    field: "sex",
                    displayName: "Sex"
                }, {
                    field: "displayWeight",
                    displayName: "Weight",
                    type: "number",
                    filters: [{
                        condition: function (term, value) {
                            return parseInt(value) >= parseInt(term);
                        },
                        placeholder: ">="
                    }, {
                        condition: function (term, value) {
                            return parseInt(value) <= parseInt(term);
                        },
                        placeholder: "<="
                    }]
                }
            ],
            appScopeProvider: {
                editRecord: function (record) {
                    $location.path('/competitor/' + record.id);
                }
            }
        };

        $scope.init = function(){
            $http.get("/admin/competitoredit/searchcompetitors.php").then(function (res) {
                $scope.data = res.data.data;
                angular.forEach($scope.data, function(competitor){
                    competitor.displayWeight = (competitor.weight || competitor.weight_pre);
                    console.log(competitor.displayWeight);
                });
            });
        };

        $scope.exportLabels = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                template: require("./export.tpl.html"),
                controller: "exportCtrl",
                size: "m"
            });

            modalInstance.result.then(function (toExport) {
                competitorSvc.export(toExport);
            });
        };

        $scope.exportPrint = function () {
            competitorSvc.print();
        };

        $scope.addCompetitor = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                template: require("./addCompetitor.tpl.html"),
                controller: "addCompetitorCtrl",
                size: "l",
                backdrop: 'static'
            });

            modalInstance.result.then(function(){
                $scope.init();
            });
        };

        $scope.init();
    })

    .controller("exportCtrl", function($scope, competitorSvc, $uibModalInstance){
        $scope.selectedDivision;
        competitorSvc.getWeightClasses().then(function(resp){
            $scope.weightClasses = resp.data;
            $scope.weightClasses = [{
                label: "All",
                id: 'All'
            }].concat($scope.weightClasses);

        });
        $scope.ok = function(){
            $uibModalInstance.close($scope.selectedDivision);
        };
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
    })

    .controller("addCompetitorCtrl", function($scope, $filter, competitorSvc, $uibModalInstance){
        $scope.competitorInfo = {};
        $scope.competitorDivisions = [];
        $scope.ranks = competitorSvc.getRanks();
        $scope.datepickerOptions = {
            maxDate: new Date(),
            datepickerMode: 'year',
            opened: false
        };

        $scope.$watch('dob', function(newVal){
            if(newVal){
                $scope.competitorInfo.dob = $filter('date')($scope.dob, 'MM/dd/yyyy');
            }
        });

        $scope.clubChange = function(){
            $scope.competitorInfo.judoclub = $scope.chosenClub.name;
            $scope.competitorInfo.clubcountry = $scope.chosenClub.country;
        };

        $scope.$watch('competitorInfo.paymentamount', function(newVal, oldVal){
            if(newVal && (isNaN(newVal) || newVal < 0)){
                $scope.competitorInfo.paymentamount = oldVal;
            } else if(newVal && (newVal + "").indexOf("0") === 0){
                $scope.competitorInfo.paymentamount = 0;
            }
        });

        $scope.ok = function(){
            competitorSvc.addCompetitor($scope.competitorInfo, $scope.competitorDivisions).then(function(){
                $uibModalInstance.close();
            }, function(err){
                $scope.error = "There was an error saving this competitor!";
            });
        };

        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };

        $scope.validateDivisions = function(){
            var valid = true;
            for(var i = 0; i < $scope.competitorDivisions.length; i++){
                if($scope.competitorDivisions[i].division < 0){
                    valid = false;
                }
            }
            return valid;
        };
        $scope.$watch('competitorInfo.weight', function(newVal, oldVal){
            if(newVal){
                if(isNaN(newVal) || newVal < 0){
                    $scope.competitorInfo.weight = oldVal;
                    $scope.disableWeightSubmit = true;
                }
            }
        });

        $scope.init = function(){
            competitorSvc.getClubs().then(function(resp){
                $scope.clubs = resp.data;
            });
            competitorSvc.getWeightClasses().then(function(resp){
                $scope.weightClasses = resp.data;
            });
        };

        $scope.init();
    });