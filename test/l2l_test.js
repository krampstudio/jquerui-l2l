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
                var widgetInstance = $('#list1').data('ks-l2l'); 
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

    asyncTest("Check move one item left to right element", function(){
        expect(4);
        $('#list1').l2l({
            create: function(){
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 3, "The left list should contains 3 items");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 0, "The right list should not contains any item");
                
               $('#list1').find('li').first().addClass('ui-selected');
                $('#list1').find('#l2r').click();
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 2, "The left list should contains only 2 items");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 1, "The right list should contains now 1 item");
              
                start();
            }
        });
    });
        
    asyncTest("Check moving multiple items left to right element", function(){
        expect(4);
        $('#list1').l2l({
            create: function(){
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 3, "The left list should contains 3 items");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 0, "The right list should not contains any item");
                
                $('#list1').find('li').addClass('ui-selected');
                $('#list1').find('#l2r').click();
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 0, "The left list should not contains items anymore");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 3, "The right list should now contains all items");
              
                start();
            }
        });
    });
    
    asyncTest("Check moving items left to right and rigt to left element", function(){
        expect(6);
        $('#list1').l2l({
            create: function(){
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 3, "The left list should contains 3 items");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 0, "The right list should not contains any item");
                
                $('#list1').find('li').addClass('ui-selected');
                $('#list1').find('#l2r').click();
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 0, "The left list should not contains items anymore");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 3, "The right list should now contains all items");
                
                $('#list1').find('#r2l').click();
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 3, "The left list should now contains all items");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 0, "The right list should not contains items anymore");
                
                start();
            }
        });
    });
    
    asyncTest("Check clear control", function(){
        expect(6);
        $('#list1').l2l({
            create: function(){
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 3, "The left list should contains 3 items");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 0, "The right list should not contains any item");
                
                $('#list1').find('li').addClass('ui-selected');
                $('#list1').find('#l2r').click();
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 0, "The left list should not contains items anymore");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 3, "The right list should now contains all items");
                
                $('#list1').find('#clear').click();
                
                equal($('#list1').find('.l2l-list:eq(0) li').length, 0, "The left list should not contains items anymore");
                equal($('#list1').find('.l2l-list:eq(1) li').length, 0, "The right list should not contains items anymore");
                
                start();
            }
        });
    });

    asyncTest("Test auto sort feature", function(){
        expect(3);
        $('#list2').l2l({
            sort : true,
            create: function(){
                equal($('#list2').find('.l2l-list:eq(0) li:eq(0)').text(), 'Item 7', "The 1st item should be 'Item 7' once sorted");
                equal($('#list2').find('.l2l-list:eq(0) li:eq(1)').text(), 'Item 8', "The 2nd item should be 'Item 8' once sorted");
                equal($('#list2').find('.l2l-list:eq(0) li:eq(2)').text(), 'Item 9', "The 3rd item should be 'Item 9' once sorted");
                start();
            }
        });
    });

})(jQuery);
