(function($){

		module('l2l:core');

		test("check if the l2l plugin is available", function(){
			expect(3);
			
			var namespace = 'ks';
			var pluginName = 'l2l';

			//check from the namespace
			equal(typeof $[namespace], 'object');
			equal(typeof $[namespace][pluginName], 'function'); //$.ks.l2l

			//check if the plugin can applies to elements
			equal(typeof $.fn[pluginName], 'function');
		});

		asyncTest("test initialisation event", function(){
			expect(1);
			$('#list1').l2l({
				create : function(){
					ok(true, "the create event has been triggered");
					start();
				}
			});
		});
	

})(jQuery);
