import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/click'}>

### **click**
<br/>
<hr/>

`click` performs a mouse click on a target element. The element can be specified using different query methods.

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
    -   `retryDuration` ([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)) interval at which the function will try to keep looking for the target element.

    -   `numberOfTries` ([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)) number of time the function will try to find the element.

    -   `expectReload` ([Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)) if set to true the script will pause the execution after successful exit of the function because the page is about to reload.

**Return**

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

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