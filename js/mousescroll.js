(function($){
	$.fn.extend({
		scrolling : function(){
			var defaults = {
				delta : 0,
				content : $(this).children('.content'),
			};
			
			var options = $.extend(defaults, options);
			
			return this.each(function(){
				var o = options;
				var obj = $(this);
				var startat = 0;
				var stopat = -(o.content.height() - (obj.height() - 10));
				var currentat = parseInt(o.content.css('margin-top'));
				
				function scroller(event){
					event.preventDefault();
					if(!event)
						event = window.event;
					if(event.wheelDelta)
						delta = (event.wheelDelta/60);
					else if(event.detail)
						delta = (-event.detail/120);
						
					delta = (delta > 0)?2:-2;
					delta *= 7;
					
					if(-(currentat - delta) <= startat && -(currentat - delta) >= stopat){
						currentat -= delta;
						o.content.css('margin-top', -currentat);
					}
				}
				
				if(obj.is('[class]')){
					document.getElementsByClassName(obj.attr('class')).item(obj.index()).onmousewheel = scroller;
					document.getElementsByClassName(obj.attr('class')).item(obj.index()).addEventListener('DOMMouseScroll', scroller, false);
				}else if(obj.is('[id]')){
					document.getElementById(obj.attr('id')).onmousewheel = scroller;
					document.getElementById(obj.attr('id')).addEventListener('DOMMouseScroll', scroller, false);
				}
				
			});
		}
	});
})(jQuery);