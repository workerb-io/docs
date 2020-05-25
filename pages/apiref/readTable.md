import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/readTable'}>

### **readTable**
<br/>
<hr/>

`readTable` is used to read the content of a table.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` is a config used by some workerB functions to modify behavior according to the given scenario. An option can consist of
    -   `method` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) method used to query the DOM.
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
        -   `by_query_selector_all` finds all the elements using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

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
5 readTable("workerB.png", "<base 64 png>", "image/png;base64," })
```

</DocBox>
