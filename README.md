> Under construction

# jQuery UI List to List Widget

A jQuery UI plugin to used move items between two lists.

## Demo and samples

[krampstudio.com/jquerui-l2l](http://krampstudio.com/jquerui-l2l/)

## Features

- Moves list items from left to right, right to left, into the list (the change items order)
- Moving can be done using the controls (, and ) or by drag and drop (using the drag zone on )
- Multiple selection, by holding _Ctrl_ or by using the lasso (inside the containing list)
- L2L interconnect : drop an item to another widget's list
- Theme fully integrated to jQuery UI
- Customizable 
- Auto sort of the items

## Getting started 

### Requirements

 - jquery >= 1.8 (only tested with 2.0.0)
 - jquery-ui >= 1.10 

## Install

Download the latest [tag](https://github.com/krampstudio/jquerui-l2l/tags) or get it via [Bower](http://bower.io) :

```bash
bower install --save jquery-l2l
```

Then add the stylesheet and the script files to your HTML file (in addition to the dependencies) 

```html
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.min.css" />  
<link rel="stylesheet" type="text/css" href="components/jqueryui-l2l/l2l.min.css" />
        
<script type="text/javascript" src="http://code.jquery.com/jquery-2.0.0.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>
<script type="text/javascript" src="components/jqueryui-l2l/l2l.min.css"></script>
```

Note that a jQuery UI theme must be loaded, as the plugin integrates with a theme (it can be a custom theme).

The plugin must target a block element that contains exactly 2 lists:

```html
<div class="my-lists">
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <ul></ul>
</div>
```

```javascript
$('.my-lists').l2l();
```

## Documentation

#### Options

`$.fn.l2l(options)`

 - `icons` _Object_ : the list of icons used (refers to [jquery-ui icon classes](http://jqueryui.com/themeroller/#icons))
   - `l2r` _String_ : icon class of the left to right action (default = 'ui-icon-triangle-1-e')
   - `r2l` _String_ : icon class of the right to left action (default = 'ui-icon-triangle-1-w')
   - `clear` _String_ : icon class of the clear action (default = 'ui-icon-trash')
   - `grip` _String_ : icon class of the item's grip (default = 'ui-icon-grip-dotted-vertical')
 - `width` _String | Number_ : the lists width as auto, a css string or in pixel (default = 'auto')
 - `height` _String | Number_ : the lists height as auto, a css string or in pixel (default = 'auto')
 - `clear` _String | Boolean_ : the clear/trash button strategy in 'right', 'left', 'all' or false by example, left removes selected items from the left list, etc. (default = 'right')
 - `interconnect` _Boolean_ : 	in case of multiple l2ls widgets, if we can drag elements into another widget (default=false)
 - `sort` _Boolean_ : sort items regarding `sortLag`. Items are sorted at creation and after moving action, expected drag n'drop (default = false)
 - `autosort` _Boolean_ : sort also when dropped (default = false)
 - `sortAlg(current, next) → {Number}` _Function_ : the sort algorithm function, the curent and next items elements in parameters and returns a _negative, zero or positive_ number.  

```javascript
$('selector').l2l({
   height : '25em',
   width : 200,
   sort : true,
   autosort: true
});
```

#### Events

 - `create` 
 - `change`

### Methods

 - `getItems() → {Object}`


## Todo

Coming soon: hard reset, move all, etc.

## Development

## History
