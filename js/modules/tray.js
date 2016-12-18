define(['jquery', 'utils/data', 'utils/events', 'utils/string_template', 'mousescroll'], function($, data, events, strTemplate) {
  var $tray;
  var trayTemplate = '<li class="carriage" data-category="{category}"><ul class="content"></ul><div class="scroller"><div class="thumb"></div></div></li>';
  var trayItemTemplate = '<li class="tray-item" data-id="{id}" data-name="{name}" data-price="{price}"><div class="item"><div class="name">{name}</div><div class="img"><img src="{location}" /></div><div class="price">{price}</div></div></li>';

  function getTrayContainer(category) {
    var selector = strTemplate.render('[data-category="{category}"]', { category: category });
    return $tray.find( selector );
  }

  function renderTray(category) {
      $tray.find('#train').append( strTemplate.render(trayTemplate, { category: category }) );
      var $trayContainer = getTrayContainer(category);
      $trayContainer.find('.carriage').scrolling();
      return $trayContainer;
  }

  function renderTrayItem(trayItem) {
      return strTemplate.render(trayItemTemplate, trayItem);
  }

  function showTray(category) {
    var $trayContainer = getTrayContainer(category);
    var index = $trayContainer.index();
    var distance = $tray.width();
    $tray.find('#train').animate({ marginLeft : -(index * distance) }, 300);
  }

  function loadTray(category) {
    var $trayContainer = renderTray(category).find('.content');
    data.fetchData('server.php', { category : category }).then(
        function(trayItems) {
          trayItems.forEach(function(trayItem) {
            $trayContainer.append( renderTrayItem(trayItem) );
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
    $tray.on('click', '.tray-item', handeleTrayItemSelection());
  }

  return {
    init: function($trayContainer) {
      $tray = $trayContainer;

      addEventListeners();
    }
  }
});
