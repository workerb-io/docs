import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/read'}>

### **readTable**
<br/>
<hr/>

#### **readTable**

`readTable` is used to read the content of a table.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` ([Options](#options)) the options object.

**Return**

-   `response` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)) stringified version of an object which has two properties
    -   `header` ([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)) Array of strings which contains all the heading for columns
    -   `rows` ([Array](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)) - Array of object where every key of a single object corresponds to a header from the header array. If `readTable` is not able to identify the correct column instead of using a column as a key `column{index}` will be used.

**Example**

```javascript
1 readTable(".table-to-read")
2 readTable("#table-to-read", {
3       method: "by_id"
4 })
```

</DocBox>
