(function($, undefined){
    
    $.widget( "ks.l2l", {
        
        options: {
            icons : {
                l2r : "ui-icon-triangle-1-e",
                r2l : "ui-icon-triangle-1-w",
                clear : "ui-icon-trash",
                grip : "ui-icon-grip-dotted-vertical"
            },
            width: 'auto',
            height: 'auto',
            sortable : true,
            draggable : true,
            clear : 'right' //right, left, all or false
        },
        
        _create: function() {
            //this.options;
            
            if(!this.element.hasClass('l2l')){
            
                this.lists = this.element.children("ul");
                if(this.lists.length != 2){
                    $.error("The l2l element must contains 2 lists as direct child");
                    return false;
                }
                this.llist = $(this.lists.get(0));
                this.rlist = $(this.lists.get(1));
                
                this.element.addClass('l2l');
                
                this.lists.addClass('l2l-list ui-widget-content ui-corner-all');
                
                if(this.options.sortable === true){
                   this.lists.sortable({
                        handle : '.ui-icon',
                        placeholder: 'ui-state-highlight',
                        opacity: 0.7
                    });
                }
                
                this.lists
                    .find('li')
                    .addClass('ui-state-default ui-corner-all')
                    .prepend(this._iconHtml('grip'));
                
                this.lists.selectable({ 
                        filter: "li", 
                        cancel: ".ui-icon",
                        selected : function(event, ui){
                            $(ui.selected).addClass('ui-state-highlight');
                        },
                        unselected : function(event, ui){
                            $(ui.unselected).removeClass('ui-state-highlight');
                        }
                    });
                
                this.llist.after(this._controlsHtml());
                
                this._on(this._events);
            }
        },
        
        _events: {
            "click .l2l-ctrl > li": function( event ) {
                event.preventDefault();
                var control = '_' + $(event.currentTarget).attr('id');
                if(this[control] !== undefined && typeof this[control] === 'function'){
                    this[control](event);
                }
            }
        },
        
        _l2r : function(event){
            this.llist.find('.ui-selected').appendTo(this.rlist);
            this._change(event);
        },
        
        _r2l : function(event){
            this.rlist.find('.ui-selected').appendTo(this.llist);
             this._change(event);
        },
        
        _clear : function(event){
            if(this.options.clear !== false){
                var ctx = (this.options.clear === 'all') ? this.lists : (this.options.clear === 'left') ? this.llist : this.rlist;
                $('.ui-selected', ctx).remove();
                 this._change(event);
            }
        },
        
        _change: function(event){
             this._trigger("change", event, {
                elements : [
                    this.llist.find('li'),
                    this.rlist.find('li')
                ]
            });
        },
        
        _controlsHtml : function(){
            var controls =  "<ul class='l2l-ctrl'>" +
                        "<li id='l2r' class='ui-state-default ui-corner-all'>" +  this._iconHtml('l2r') + "</li>" +
                        "<li id='r2l' class='ui-state-default ui-corner-all'>" +  this._iconHtml('r2l') + "</li>";
            if(this.options.clear !== false){
                controls += "<li id='clear' class='ui-state-default ui-corner-all'>" +  this._iconHtml('clear') + "</li>";
            }
            controls += "</ul>";
            
            return controls;
        },
        
        _iconHtml : function(name){
            return "<span class='ui-icon " + this.options.icons[name] + "'></span>"
        }
    });
}(jQuery));