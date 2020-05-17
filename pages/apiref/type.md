import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/type'}>

### **type**
<br/>
<hr/>

`type` writes a given string to a target input field. The input field can be specified using different query methods.

**Arguments**

-   `text` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value that should be written to a target input field.
-   `path` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` ([Options](#options)) the options object.
    -   If no path is provided in options config by default query fallback to label first if element not found then the function checks for placeholder

**Example**

```javascript
1 type('testuser', 'Username or email')
2 type('Automate your browser rituals', '#workerB_Input', {
3       method: 'by_query_selector'
4 })
```

</DocBox>