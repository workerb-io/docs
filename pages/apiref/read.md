import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/read'}>

### **read**
<br/>
<hr/>

`read` is used to get text of an element.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target input field in the DOM.
-   `options` the options object.

**Return**

-   `text` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) text inside an element or in case of input the value of the input.

**Example**

```javascript
1 read('#workerB_Input', {
2       method: 'by_query_selector'
3 })
```

</DocBox>
