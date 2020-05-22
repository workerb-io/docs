import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/read'}>

### **read**
<br/>
<hr/>

`read` is used to get text of an element.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target input field in the DOM.
-   `options` is a config used by some workerB functions to modify behavior according to the given scenario. An option can consist of
    -   `method` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) method used to query the DOM.
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
        -   `by_query_selector_all` finds all the elements using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

**Return**

-   `text` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) text inside an element or in case of input the value of the input.

**Example**

```javascript
1 read('#workerB_Input', {
2       method: 'by_query_selector'
3 })
```

</DocBox>
