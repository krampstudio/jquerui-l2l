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
            height: 'auto',
            sortable : true
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
                
                lists.addClass('l2l-list ui-widget-content ui-corner-all');
                
                if(this.options.sortable === true){
                    lists.sortable({
                        handle : '.ui-icon',
                        placeholder: 'ui-state-highlight',
                        opacity: 0.7
                    });
                }
                
                lists
                    .find('li')
                    .addClass('ui-state-default ui-corner-all')
                    .prepend(this._iconHtml('grip'));
                
                llist.selectable({ 
                        filter: "li", 
                        cancel: ".ui-icon",
                        selected : function(event, ui){
                            $(ui.selected).addClass('ui-state-highlight');
                        },
                        unselected : function(event, ui){
                            $(ui.unselected).removeClass('ui-state-highlight');
                        }
                    });
                
                llist.after(this._controlsHtml());
                
                this._on(this._events);
            }
        },
        
        _events: {
            "click .l2l-ctrl > li": function( event ) {
                event.preventDefault();
                var control = '_' + $(event.currentTarget).attr('id');
                if(this[control] !== undefined && typeof this[control] === 'function'){
                    this[control]();
                }
            }
        },
        
        _l2r : function(){
            console.log('l2r')
        },
        
        _r2l : function(){
             console.log('z2l')
        },
        
        _rm : function(){
            
        },
        
        _controlsHtml : function(){
            return  "<ul class='l2l-ctrl'>" +
                        "<li id='l2r' class='ui-state-default ui-corner-all'>" +  this._iconHtml('l2r') + "</li>" +
                        "<li id='r2l' class='ui-state-default ui-corner-all'>" +  this._iconHtml('r2l') + "</li>" +
                        "<li id='rm' class='ui-state-default ui-corner-all'>" +  this._iconHtml('rm') + "</li>" +
                    "</ul>";
        },
        
        _iconHtml : function(name){
            return "<span class='ui-icon " + this.options.icons[name] + "'></span>"
        }
    });
}(jQuery));