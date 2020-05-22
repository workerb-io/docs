import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/type'}>

### **type**
<br/>
<hr/>

`type` writes a given string to a target input field. The input field can be specified using different query methods.

**Arguments**

-   `text` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value that should be written to a target input field.
-   `path` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` is a config used by some workerB functions to modify behavior according to the given scenario. An option can consist of
    -   `method` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) method used to query the DOM.
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
        -   `by_query_selector_all` finds all the elements using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
        -   `by_label` finds the target input using a [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).
        -   `by_placeholder` finds the target input using a [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefplaceholder).

    -   `path` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
        -   If no path is provided in options config by default query fallback to label first if element not found then the function checks for placeholder

**Return**

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

**Example**

```javascript
1 type('testuser', 'Username or email')
2 type('Automate your browser rituals', '#workerB_Input', {
3       method: 'by_query_selector'
4 })
```

</DocBox>