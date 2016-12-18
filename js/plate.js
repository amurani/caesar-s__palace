requirejs.config({
    paths: {
        jquery: 'libs/jquery.min',
        mousescroll: 'libs/mousescroll',
        center: 'libs/center',
        redux: 'libs/redux.min'
    }
});

requirejs([
  'jquery', 'modules/menu', 'modules/tray', 'modules/bill',

  'mousescroll', 'center'
], function($, menu, tray, bill) {

    $(document).ready(function() {

      $('#header').height($(window).height()*0.2);
      $('#header #logo').css('margin-top', ($('#header').height() - 100)/2);
      $('#header').height($('#header').height() - ($('#header').height() - 100)/2);
      $('#body').height($(window).height()*0.798);
      $('#body').width($(document).width());
      $('#menu').width($('#body').width()*0.15);
      $('#bill').width($('#body').width()*0.25);
      $('#tray').height($('#body').height());
      $('#tray').width($('#body').width()*0.598);
      $('#tray ul').width(4 * $('#tray').width());
      $('#tray ul').height($('#tray').height());
      $('#tray ul li').width($('#tray').width() - 20);
      $('#tray ul li').height($('#tray').height() - 20);
      $('#tray ul li ul').width($('#tray ul li').width() - 30);
      $('#tray ul li ul').height($('#tray ul li').height() - 20);
      $('.carriage ul').css('height', 'auto');
      $('#tray ul li ul li').width(98);
      $('#tray ul li ul li').height(98);
      $('#tray ul li ul li').css('margin-top', Math.floor(Math.floor($('#tray ul li ul').width()/(Math.floor($('#tray ul li ul').width()/110))) - 100));
      $('#tray ul li ul li').css('margin-left', Math.floor(Math.floor($('#tray ul li ul').width()/(Math.floor($('#tray ul li ul').width()/110))) - 100));
      $('#tray ul li .scroller').css('margin-top', Math.floor(Math.floor($('#tray ul li ul').width()/(Math.floor($('#tray ul li ul').width()/110))) - 100));
      $('#tray ul li .scroller').height(($('#tray ul li').height() - 20) - parseInt($('#tray ul li .scroller').css('margin-top')));
      $('#tray ul li .scroller .thumb').height((($('.carriage ul').height()/$('.carriage').height()) * $('#tray ul li .scroller').height()));
      $('#tray ul li .scroller .thumb').hide();
      $('#bill #content').width($('#bill').width() - 20);

    });

    menu.init( $('#menu>ul') );

    tray.init( $('#tray') );

    bill.init( $('#bill') );

});
