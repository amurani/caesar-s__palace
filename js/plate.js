requirejs.config({
    paths: {
        jquery:       'libs/jquery.min',
        mousescroll:  'libs/mousescroll',
        center:       'libs/center',
        redux:        'libs/redux.min',
        handlebars:   'libs/handlebars.amd.min'
    }
});

requirejs([
  'jquery', 'modules/menu', 'modules/tray', 'modules/bill',

  'mousescroll', 'center'
], function($, menu, tray, bill) {

    menu.init( $('.menu') );

    tray.init( $('.tray') );

    bill.init( $('.bill') );

});
