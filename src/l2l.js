(function($, undefined){
    
    $.widget( "ks.l2l", {
        
        options: {
            icons : {
                l2r : "ui-icon-triangle-1-e",
                r2l : "ui-icon-triangle-1-w",
                rm : "ui-icon-trash"
            }
        },
        
        _create: function() {
            //this.options;
            var lists = this.element.children("ul");
            if(lists.length != 2){
                $.error("The l2l element must contains 2 lists as direct child");
                return false;
            }
            var llist = lists.get(0);
            var rlist = lists.get(1);
            
            this.element.append(this._controlsHtml());
            
            console.log(llist)
            console.log(rlist)
        },
        
        _controlsHtml : function(){
            return  "<a class='ui-corner'>" +
                        "<span class='ui-icon " + this.options.icons.l2r + "'>&#9650;</span>" +
                    "</a>" + 
                    "<a class='ui-corner'>" +
                        "<span class='ui-icon " + this.options.icons.r2l + "'>&#9650;</span>" +
                    "</a>" + 
                    "<a class='ui-corner'>" +
                        "<span class='ui-icon " + this.options.icons.trash + "'>&#9650;</span>" +
                    "</a>";
        }
    });
}(jQuery));