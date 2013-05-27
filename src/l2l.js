(function($, undefined){
    
    $.widget( "ks.l2l", {
        
        options: {
            icons : {
                l2r : "ui-icon-triangle-1-e",
                r2l : "ui-icon-triangle-1-w",
                rm : "ui-icon-trash",
                grip : "ui-icon-grip-dotted-vertical"
            },
            width: 'auto',
            height: 'auto'
        },
        
        _create: function() {
            //this.options;
            
            if(!this.element.hasClass('l2l')){
            
                var lists = this.element.children("ul");
                if(lists.length != 2){
                    $.error("The l2l element must contains 2 lists as direct child");
                    return false;
                }
                var llist = $(lists.get(0));
                var rlist = $(lists.get(1));
                
                this.element.addClass('l2l');
                lists
                    .addClass('l2l-list ui-widget-content ui-corner-all')
                    .sortable({
                        placeholder: 'ui-state-highlight',
                        opacity: 0.7
                    });
                lists
                    .find('li')
                    .addClass('ui-state-default ui-corner-all')
                    .prepend(this._iconHtml('grip'));
                
                llist.after(this._controlsHtml());
            }
        },
        
        _controlsHtml : function(){
            return  "<ul class='l2l-ctrl'>" +
                        "<li class='ui-state-default ui-corner-all'>" +  this._iconHtml('l2r') + "</li>" +
                        "<li class='ui-state-default ui-corner-all'>" +  this._iconHtml('r2l') + "</li>" +
                        "<li class='ui-state-default ui-corner-all'>" +  this._iconHtml('rm') + "</li>" +
                    "</ul>";
        },
        
        _iconHtml : function(name){
            return "<span class='ui-icon " + this.options.icons[name] + "'></span>"
        }
    });
}(jQuery));