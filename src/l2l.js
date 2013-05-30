(function($, undefined){
    'use strict';
    
    /** @namespace ks */
    /** @namespace ks.l2l */
    
    /**
     * jQuery UI widget ks.l2l
     * 
     */
    $.widget( "ks.l2l", /** @lends ks.l2l */ {
        
        /**
         * Widget options, with default values
         * @type {Object}
         * @property {Object} icons - the list of icons used (refers to jquery-ui icon classes)
         * @property {String|Number} [width='auto'] - the lists width as auto, a css string or in pixel
         * @property {String|Number} [height='auto'] - the lists height as auto, a css string or in pixel
         * @property {String|Boolean} [clear='right'] - the clear/trash button strategy in 'right', 'left', 'all' or false 
         *                                              by example, left removes selected items from the left list, etc.
         * @property {Boolean} [interconnect=false] - in case of multiple l2l widgets, if we can drag elements into another widget
         */
        options: {
            icons : {
                l2r : "ui-icon-triangle-1-e",
                r2l : "ui-icon-triangle-1-w",
                clear : "ui-icon-trash",
                grip : "ui-icon-grip-dotted-vertical"
            },
            width: 'auto',
            height: 'auto',
            clear : 'right',
            interconnect : false
        },
        
        /**
         * Initialize the widget
         * @private
         */
        _create: function() {
            //check if the element is aleady created            
            if(!this.element.hasClass('l2l')){
                
                //set up elements
                this.lists = this.element.children("ul");
                if(this.lists.length != 2){
                    $.error("The l2l element must contains 2 lists as direct child");
                    return false;
                }
                this.llist = $(this.lists.get(0));
                this.rlist = $(this.lists.get(1));
                
                //update the DOM : add classes and controls
                this.element.addClass('l2l');
                this.lists.addClass('l2l-list ui-widget-content ui-corner-all');
                this.lists
                    .find('li')
                    .addClass('l2l-list-item ui-state-default ui-corner-all')
                    .prepend(this._iconHtml('grip'));
                    
                this.llist.after(this._controlsHtml());
                
                this._updateSize();
                
                //make the lists elements selectable, sortable and draggable
                this.lists
                    .selectable({ 
                        filter: "li", 
                        cancel: ".ui-icon",
                         selecting : function(event, ui){
                            $(ui.selecting).addClass('ui-state-hover');
                        },
                        selected : function(event, ui){
                            $(ui.selected).addClass('ui-state-active').removeClass('ui-state-default ui-state-hover');
                        },
                        unselected : function(event, ui){
                            $(ui.unselected).removeClass('ui-state-active').addClass('ui-state-default');
                        }
                    })
                    .sortable({
                        handle : '.ui-icon',
                        placeholder: 'ui-state-highlight',
                        opacity: 0.7,
                        connectWith : (this.options.interconnect === true) ? '.l2l-list' : this.lists, 
                    })
                    .draggable({
                        connectToSortable : (this.options.interconnect === true) ? '.l2l-list' : this.lists, 
                        helper : 'clone',
                        scroll: false,
                        handle : '.ui-icon',
                        revert : 'invalid',
                        zIndex: 1000,
                        opacity: 0.7
                    });
                
                //attach the events handlers
                this._on(this._events);
            }
        },
        
        /**
         * Events bounds into the widget
         * @private
         * @type {Object.<string,function>} 
         */
        _events: {
            "click .l2l-ctrl > li": function( event ) {
                event.preventDefault();
                var control = '_' + $(event.currentTarget).attr('id');
                if(this[control] !== undefined && typeof this[control] === 'function'){
                    this[control](event);
                }
            }
        },
        
        /**
         * Action to move items from left to right
         * @private
         * @param {Object} event - the source event
         */
        _l2r : function(event){
            this.llist.find('.ui-selected').appendTo(this.rlist);
            this._change(event);
        },
        
        /**
         * Action to move items from right to left
         * @private
         * @param {Object} event - the source event
         */
        _r2l : function(event){
            this.rlist.find('.ui-selected').appendTo(this.llist);
             this._change(event);
        },
        
        /**
         * Action to move items from right to left
         * @private
         * @param {Object} event - the source event
         */
        _clear : function(event){
            if(this.options.clear !== false){
                var ctx = (this.options.clear === 'all') ? this.lists : (this.options.clear === 'left') ? this.llist : this.rlist;
                $('.ui-selected', ctx).remove();
                 this._change(event);
            }
        },
        
        /**
         * Fires a change event
         * @private
         * @param {Object} event - the source event
         * @fires ks.l2l#change
         */
        _change: function(event){
            
            /**
             * ks.l2l.change event
             * @event ks.l2l#change
             * @type {Items}
             */
            this._trigger("change", event, this._getItems());
        },
        
        /**
         * Get the items on the lists
         * @private
         * @returns {Items}
         */
        _getItems : function(){
            
            /**
             * The lists items
             * @typedef {Object} Items
             * @property {Array} left - the left's list items from
             * @property {Array} right - the right's list items from
             */
            return {
              'left' : this.llist.find('li'), 
              'right' : this.rlist.find('li')
            };
        },
        
        /**
         * Update the lists size according to the options
         */
        _updateSize : function(){
            
            //update width if set in options
            if(this.options.width && this.options.width !== 'auto'){
                var width = this.options.width;
                if($.isNumeric(this.options.width)){
                    width += 'px';
                }
                this.lists.width(width);
            } 
            
            if(this.options.height){
                //if auto height, set a min-height for the lists to be consistents
                if(this.options.height === 'auto'){
                    var lHeight = parseInt(this.llist.height(), 10);
                    var rHeight = parseInt(this.rlist.height(), 10);
                    this.lists.css('min-height', Math.max(lHeight, rHeight) + 'px');
                } else {
                    var height = this.options.height;
                    if($.isNumeric(this.options.height)){
                        height += 'px';
                    }
                    this.lists.height(height);
                }
            }
        },
        
        /**
         * Build the HTML elements used for the controls
         * @return {String} the html string
         */
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
        
        /**
         * Build the HTML element for an icon regarding the options
         * @return {String} the html string
         */
        _iconHtml : function(name){
            return "<span class='ui-icon " + this.options.icons[name] + "'></span>";
        }
    });
}(jQuery));
