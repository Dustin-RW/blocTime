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
        .config(config);
})();
