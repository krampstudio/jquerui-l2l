(function($){

		module('l2l:core');

		test("check if the l2l plugin is available", function(){
			expect(3);
			
			var namespace = 'ks';
			var pluginName = 'l2l';

			//check from the namespace
			equal(typeof $[namespace], 'object', '$.'+namespace+' namespace is available');
			equal(typeof $[namespace][pluginName], 'function', '$.'+namespace+'.'+pluginName+' function is available' );

			//check if the plugin can applies to elements
			equal(typeof $.fn[pluginName], 'function', 'the plugin applies to elements ($.fn.'+pluginName+' function is available)');
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

        asyncTest("Checks behavior data and classes are added", function(){
            expect(4); 
            $('#list1').l2l({
                create: function(){
                    var widgetInstance = $('#list1').data('ksL2l'); 
                    equal(typeof widgetInstance, 'object', 'The widget instance is avaialble');
                    equal(widgetInstance.element.attr('id'), 'list1', 'The widget instance target element is the tested element');

                    ok($('#list1').hasClass('l2l'), "The target element has the 'l2l' class");
                    ok($('#list1').find('.l2l-list').length === 2, "The target element contains 2 lists with the 'l2l-list' class");

                    start();
                }
            });
        });

        asyncTest("Check controls are inserted", function(){
            expect(2);
            $('#list1').l2l({
                create: function(){
                    var ctrlList = $('#list1').find('.l2l-ctrl');
                    ok(ctrlList.length === 1, 'A control list has been inserted');
                    ok(ctrlList.find('li').length >= 2, 'The controls buttons are presents');
                    start();
                }
            });
        });

        asyncTest("Check select elements", function(){
            expect(2);
            $('#list1').l2l({
                create: function(){
                    var item1 = $('#list1').find('li').first();
                   
                     equal(item1.text(), 'Item 1', 'Check the content of the first item');
                    
                    item1.trigger('click');
                    
                    ok(item1.hasClass('ui-selected'), "Check the item has the 'ui-selected' class once clicked");
                    start();
                }
            });
        });
	

})(jQuery);
