
> Under construction, plugin not yet released

# jQuery UI List to List Widget

A jQuery UI plugin to used move items between two lists.

## Features

- Moves list items from left to right, right to left, into the list (the change items order)
- Moving can be done using the controls (, and ) or by drag and drop (using the drag zone on )
- Multiple selecion, by holding Ctrl or by using the lasso (inside the containing list)
- L2L interconnect : drop an item to another list
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

## Todo

Coming soon: hard reset, move all, etc.

## Development

## History