define(['jquery', 'utils/data', 'utils/events', 'utils/string_template', 'handlebars'], function($, data, events, strTemplate, Handlebars) {
  var $tray;
  var $trayContainerTemplate;
  var $trayItemTemplate;

  function getTrayContainer(category) {
    var selector = strTemplate.render('[data-category="{category}"]', { category: category });
    return $tray.find( selector );
  }

  function renderTray(category) {
    var template = Handlebars.compile( $trayContainerTemplate );
    $tray.find('.tray__wrapper').append( template({ category: category }) );
    var $trayContainer = getTrayContainer(category);
    return $trayContainer;
  }

  function renderTrayItem(trayItem) {
      var template = Handlebars.compile( $trayItemTemplate );
      return template( trayItem );
  }

  function showTray(category) {
    $tray.find('.tray__container').hide();
    getTrayContainer(category).show();

  }

  function loadTray(category) {
    var $trayContainer = renderTray(category);
    data.fetchData('server.php', { category : category }).then(
        function(trayItems) {
          trayItems.forEach(function(trayItem) {
            $.extend(trayItem, { category });
            $trayContainer.find('.tray__list').append( renderTrayItem(trayItem) );
          });

          showTray(category);
        }
    );
  }

  function handleCategorySelection() {
    return function(event) {
      var category = event.category;
      var $trayContainer = getTrayContainer(category);
      if ( $trayContainer.size() ) {
        showTray(category);
      } else {
        loadTray(category);
      }
    }
  }

  function handeleTrayItemSelection() {

    return function(e) {
      var $el = $(this);
      events.fire('tray', $el.data());
    }
  }

  function addEventListeners() {
    events.listen('category', handleCategorySelection());
    $tray.on('click', '.tray__item', handeleTrayItemSelection());
  }

  return {
    init: function($trayEl) {
      $tray = $trayEl;
      $trayContainerTemplate = $tray.find('.template--tray__container').html();
      $trayItemTemplate = $tray.find('.template--tray__item').html();

      addEventListeners();
    }
  }
});
