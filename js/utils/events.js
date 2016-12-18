define(['jquery'], function($) {

  return {

    fire: function(namespace, data) {
      $.event.trigger({
        type: namespace,
        _data: data
      });
    },

    listen: function(namespace, callback) {
      $(document).on(namespace, function(event) {
        callback(event._data);
      });
    }

  };
});
