# stStickyHeader
sticky table directive for smart-table

![stStickeyHeader](http://i.imgur.com/ocN250H.gif)

## install 

``bower install st-sticky-header``
``npm install smart-table-sticky-header``

## dependencies

[lrStickyHeader](https://github.com/lorenzofox3/lrStickyHeader)

## example

```html
<script src="angular.js"></script> <!-- add angular framework-->
<script src="lrStickyHeader.js"></script> <!-- add lrStickyHeader (script framework agnostic) --> 
<script src="smart-table.js"></script> <!-- add smart table angular module --> 
<script src="stStickyHeader.js"></script><!-- load directive --> 
<script>
  angular.module('myApp',['smart-table']) // bootstrap your app 
</script>

<table st-table="foo" st-sticky-header>  <!-- use st-sticky-header directive on the smart-table element -->

</table>
```
