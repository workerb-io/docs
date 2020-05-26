import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/readAll'}>

### **readAll**
<br/>
<hr/>

The **readAll** function returns texts of all target elements which match the query.

<br/>

##### Arguments

-   **value**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to identify the target elements in the DOM.
-   **options**: An optional [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the read function does. It can have the following properties:
    -   **method**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to control how the target elements are searched. The default value of method is 'by_text'. Here are the supported values: 
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
        -   `by_query_selector_all` finds all the elements using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)        
    -   **retryDuration**: A [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies how often the runtime will try to find the target element. The default value is 200 milliseconds.
    -   **numberOfTries**: A [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) number which specifies how many times the script runner will try to find the target element. The default value is 10.
    -   **expectReload**: A [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) to indicate if script runner should expect the page to reload. If set to true, the script execution will pause after executing the click. It will resume after the page reloads. The default value is false.

<br/>

##### Return

A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that is stringified version of the array of values read.

<br/>

##### Examples


```javascript
1 readAll('.all_titles')
```
    
</DocBox>
