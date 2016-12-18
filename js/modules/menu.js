define(['jquery', 'utils/data', 'utils/events', 'utils/string_template', 'handlebars'], function($, data, events, strTemplate, Handlebars) {
  var $menu;
  var $menuItemTemplate;

  function getTitlizedCategory(category) {
    return category[0].toUpperCase() + category.slice(1, category.length);
  }

  function renderCategory(category) {
    var template = Handlebars.compile( $menuItemTemplate );
    return template({ category: category, Category: getTitlizedCategory(category) });
  }

  function loadCategories() {
    data.fetchData( 'server.php', { } ).then(
        function(categories) {
            categories.forEach(function(category) {
              $menu.find('.menu_list').append( renderCategory(category.category) );
            });
        }
    );
  }

  function handleCategorySelection() {
    return function(e) {
      var $el = $(this);
      events.fire('category', { category: $el.data().category });
    }
  }

  function addEventListeners() {
    $menu.on('click', 'li', handleCategorySelection());
  }

  return {
    init : function($menuEl) {
        $menu = $menuEl;
        $menuItemTemplate = $menu.find('.template--menu_list__item').html();

        addEventListeners();

        loadCategories();
    }
  }
});
