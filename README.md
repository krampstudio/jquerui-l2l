# jQuery UI List to List Widget

A jQuery UI plugin to used move items between two lists.

 - [Demo and samples](http://krampstudio.com/jquerui-l2l/)
 - [JsDoc](http://krampstudio.com/jquerui-l2l/doc/ks.l2l.html)
 - [jQuery plugin repo](http://plugins.jquery.com/jqueryui-l2l/)

## Features

- Moves list items from left to right, right to left, into the list (change items order)
- Moving can be done using the controls or by drag and drop
- Multiple selection, by holding _Ctrl_ or by using the lasso
- L2L interconnect : drop an item to another widget's list
- Theme fully integrated to jQuery UI
- Customizable 
- Auto sort of the items

## Getting started 

### Requirements

 - jquery >= 1.8 (only tested with 2.0.0)
 - jquery-ui >= 1.10 

## Install

Download the latest [tag](https://github.com/krampstudio/jquerui-l2l/tags) or get it via [bower] :

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

The plugin must target a block element that contains exactly two `ul` elements :

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

##### Sample

```javascript
$('selector').l2l({
   height : '25em',
   width : 200,
   sort : true,
   autosort: true
});
```

#### Events

 - `create(event)` _Function_ : triggered after the widget has been created
 - `change(event, items)` _Function_ : triggered after any change in the items of the both lists
 
##### Sample

```javascript
$('selector').l2l({
  create: function(){
     console.log('widget created');  
   },
   change: function(event, items){
       console.log(items.left);
       console.log(items.right);
   }
});
``` 

### Methods

 - `getItems() → {Object}`  _Function_ : returns the items of the both lists, each item is the  


## Todo

 - hard reset : save the items state before plugin load to be able to restore it
 - move all : move all items from r2l or l2r
 - implements the `destroy` and `disable` method
 - See [issues](https://github.com/krampstudio/jquerui-l2l/issues)

## Development

### Set up

As well, [node] and [npm] must be installed and running on your system.

 1. Clone/Fork the repo
 2. Install [bower] and [grunt], if you don't have them already : `$> npm install -g grunt-cli bower`
 3. Go to the project folder : `$> cd jqueryui-l2l`  
 4. Install the development dependencies : `$> npm isntall`
 5. Install the client librairies : `$> bower isntall`
 6. The jquery.ui dependency needs also to be build: `$> cd lib/jquery.ui; npm install; grunt build`

### Technical documentation

The plugin uses the widget factory provided by jQUery UI. Please refer to the [offical documentation](http://api.jqueryui.com/jQuery.widget/) to learn the way it works.

### Tests

Any evolution must be tested using the [qunit] test. Add a new test case to `test/l2l_test.js`.

The test suite must runs succesfuly. Try it using: `$> grunt qunit`

### Build

Run the build sequence : `$> grunt`

## History

 * _0.1.1_ First release
   * _0.1.2_ Updated meta-data


[node]: http://nodejs.org
[npm]: http://npmjs.org
[grunt]: http://gruntjs.com
[bower]: http://bower.io
