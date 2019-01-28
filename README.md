# model-dialog
a global modal dialog component with vanilla javascript  


## demo
[在线示例](https://htmlpreview.github.io/?https://github.com/nieyt/model-dialog/blob/master/demo/index.html)

## Usage

### Syntax

#### Import
```html
<link rel="stylesheet" href="../bundle/modal.css">
<script src="../bundle/modal.js"></script>
```

**or**

```js
import modal from '../bundle/modal.js'
import '../bundle/modal.css'
```

#### Use

```js
modal.open(options) //basic method
modal.alert(content[, options]) 
modal.confirm(content[, options]) 
```

##### options

* Type: `Object`
* Default: {}
## Example

```js
modal.open({
    content: 'content', // the content, default is ''
    title: 'title', // the title, default is '信息'
    width: '400px', // width of the modal box, is depending on the content 
    height: '300px', // height of the modal box, is depending on the content 
    maxWidth: '200px', // max width of the modal box, default is '100%'
    maxHeight: '200px', // max height of the modal box, default is '100%'
    skin: 'red', // custom class name of the modal box
    btn: ['yes', 'no'], // custom button content, type can be `String` or `Array`, default is '确定' (confirm method default is ['确定', '取消'])
    opacity: '0.4', //opacity of the modal mask, default is '0.3'
    yes: function() { console.log('yes') }, // callback of the first button
    no: function() { console.log('no') }, // callback of the second button
    always: function() { console.log('always') } // callback of any button
})
```
