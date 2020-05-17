import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/click'}>

### **Click**
<br/>
<hr/>

`click` performs a mouse click on a target element. The element can be specified using different query methods.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` ([Options](#options)) the options object.

**Example**

```javascript
1 click('Run pipeline') // default lookup
2 click('Run pipeline', { // lookup by text value
3       method: 'by_text'
4 })
5 click('/html/body/div[3]/form/div[2]/div[1]/div[1]/a/img', { // lookup by xpath
6       method: 'by_xpath'
7 })
8 click('#element_Id', { method: 'by_query_selector' }) // lookup by query selector
```

</DocBox>