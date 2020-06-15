import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/read'}>

### **read**
<hr/>
<br/>

The **read** function returns a text from a target element.

<br/>

##### Arguments

-   **query**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to identify the target element in the DOM.
-   **options**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the read function does. It can have the following properties:
    -   **method**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to control how the target element is searched. The default value of method is 'by_query_selector'. Here are the supported values: 
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   **retryDuration**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies after how many milliseconds the runtime will try to find the target element. The default value is 200. 
    -   **numberOfTries**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) number which specifies how many times the script runner will try to find the target element. The default value is 10.

<br/>

##### Return

A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) which is either the text inside an element or in case of input the value of the input.

<br/>

##### Examples

```javascript
1 read('#workerB_Input', {
2       method: 'by_query_selector'
3 })
```

</DocBox>
