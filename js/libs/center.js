define(['jquery'], function(jQuery) {
	(function($) {
		$.fn.extend({
			centerinparent : function(options){

				var defaults = {
					child_ : $(this),
					parent_ : $(document),
					offset_x : 0,
					offset_y : 0
				};

				var options = $.extend(defaults, options);

				return this.each(function() {
					var object = options;
					object.child_.css('margin-left', ((object.parent_.width() - object.child_.width())/2) + object.offset_x);
					object.child_.css('margin-top', ((object.parent_.height() - object.child_.height())/2) + object.offset_y);
				});
			}
		});
	})(jQuery);
});
