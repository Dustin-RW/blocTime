(function() {
  function config($locationProvider) {
    $locationProvider
        .html5Mode({ //hashBang URLs are disabled
        enabled: true,
        requireBase: false
    });


  };





    angular
        .module('blocTime', ['firebase', 'ui.router'])
        .config(config)
        .constant('STOP_WATCH', {
          "workTime": 5,
          "breakTime": 3,
          "defaultWorkTime": 5,
          "defaultBreakTime": 3
        });
})();
