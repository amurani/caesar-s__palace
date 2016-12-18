define(['jquery', 'utils/data', 'utils/events', 'utils/string_template'], function($, data, events, strTemplate) {
  var $menu;
  var menuItemTemplate = '<li data-category="{category}">{Category}</li>';

  function getTitlizedCategory(category) {
    return category[0].toUpperCase() + category.slice(1, category.length);
  }

  function renderCategory(category) {
    var menuItem = strTemplate.render(menuItemTemplate, { category: category, Category: getTitlizedCategory(category) });

    $menu.append( menuItem );

  }

  function loadCategories() {
    data.fetchData( 'server.php', { } ).then(
        function(categories) {
            categories.forEach(function(category) {
              renderCategory(category.category);
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
    init : function($menuContainer) {
        $menu = $menuContainer;

        loadCategories();

        addEventListeners();
    }
  }
});
