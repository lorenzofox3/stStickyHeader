(function(ng, undefined) {
    'use strict';
    ng.module('smart-table')
        .directive('stStickyHeader', ['$window', '$timeout', function($window,$timeout) {
            return {
                require: '^?stTable',
                link: function(scope, element, attr, ctrl) {                    
                    var stickyHeader;
                    // used $timeout which helped for mulitple smart tables usuage, it will wait until it finds element[0] for next smartTable.
                    var timer = $timeout(function() {
                        stickyHeader = lrStickyHeader(element[0], { headerHeight: attr.stStickyHeaderTop, tBodyCls: attr.stStickyHeaderTbodyClass });
                    }, 1000);

                    scope.$watch(function() {
                        return ctrl.tableState();
                    }, function() {
                        $window.scrollTo(0, lrStickyHeader.treshold);
                    }, true);

                    // The below code is a fix for resize window in all browsers
                    function stResizeWindow() {
                        //stickyHeader.clean();
                        angular.element(element[0]).find('thead').removeAttr('style');
                        angular.element(element[0]).find('thead').removeClass('lr-sticky-header');
                        $window.scrollTo(0, lrStickyHeader.treshold);
                        stickyHeader = lrStickyHeader(element[0], { headerHeight: attr.stStickyHeaderTop, tBodyCls: attr.stStickyHeaderTbodyClass });
                    }

                    angular.element($window).on("resize", stResizeWindow);

                    scope.$on('$destroy', function() {
                        $timeout.cancel(timer);
                        stickyHeader.clean();
                        angular.element($window).off("resize", stResizeWindow);
                    });
                }
            }
        }]);
})(angular);