import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/readURL'}>

### **readURL**
<br/>
<hr/>

`readURL` is used to read the current active tab url.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` ([Options](#options)) the options object.

**Return**

-   `url` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) current page url.

**Example**

```javascript
1 readTable(".table-to-read")
2 readTable("#table-to-read", {
3       method: "by_id"
4 })
```

</DocBox>
