(function(ng, undefined) {
    'use strict';
    ng.module('smart-table')
        .directive('stStickyHeader', ['$window', '$timeout', function($window,$timeout) {
            return {
                require: '^?stTable',
                link: function(scope, element, attr, ctrl) {                    
                    // used $timeout which helped for mulitple smart tables usuage, it will wait until it finds element[0] for next smartTable.
                    $timeout(function() {
                        var stickyHeader = lrStickyHeader(element[0], { headerHeight: attr.stStickyHeaderTop, tBodyCls: attr.stStickyHeaderTbodyClass });
                        scope.$on('$destroy', function() {
                            stickyHeader.clean();
                        });
                    }, 200);

                    scope.$watch(function() {
                        return ctrl.tableState();
                    }, function() {
                        $window.scrollTo(0, lrStickyHeader.treshold);
                    }, true);

                    // The below code is a fix for resize window in all browsers
                    angular.element($window).on("resize", function() {
                        //stickyHeader.clean();
                        angular.element(element[0]).find('thead').removeAttr('style');
                        angular.element(element[0]).find('thead').removeClass('lr-sticky-header');
                        $window.scrollTo(0, lrStickyHeader.treshold);
                        var stickyHeader = lrStickyHeader(element[0], { headerHeight: attr.stStickyHeaderTop, tBodyCls: attr.stStickyHeaderTbodyClass });
                    });
                }
            }
        }]);
})(angular);