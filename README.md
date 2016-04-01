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

<!-- sample css if you want override 

.sticky-header-tbody-space:before {
  content: '-';
  line-height: 180px;
} -->

<table st-table="foo" st-sticky-header st-sticky-header-top="120" st-sticky-header-tbody-class="sticky-header-tbody-space">  <!-- use st-sticky-header directive on the smart-table element -->

</table>
```

## License

stStickyHeader module is under MIT license:

> Copyright (C) 2016 Laurent Renard.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
