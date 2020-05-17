import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/read'}>

### **getAttribute**
<br/>
<hr/>

`getAttribute` is used to get attribute value of the provided element.

**Arguments**

-   `attributes` (([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))|([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))) a single attribute or attribute array of which we want to get value of.
- `path` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` ([Options](#options)) the options object.

**Return**

if there is only one element found with the given path

- `attributesValues` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) either a single string containing the value of the attribute or if multiple attributes are requested then a stringified version of an object with all attributes.

if multiple elements found

- `response` ([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)) Array of `attributesValues`

**Example**

```javascript
1 getAttribute(["href"], '.d-table.table-fixed.col-12.width-full.py-4.border-bottom.border-gray-light [data-hovercard-type="user"]', {
2   method: "by_query_selector_all"
3 })
```

</DocBox>
