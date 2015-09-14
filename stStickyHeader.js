(function (ng, undefined) {
  'use strict';
  ng.directive('stStickyHeader', ['$window', function ($window) {
    return {
      require: '^?stTable',
      link: function (scope, element, attr, ctrl) {
        var stickyHeader = lrStickyHeader(element[0]);
        scope.$on('$destroy', function () {
          stickyHeader.clean();
        });

        scope.$watch(function () {
          return ctrl.tableState();
        }, function () {
          $window.scrollTo(0, lrStickyHeader.treshold);
        }, true)
      }
    }
  }]);
})(angular);