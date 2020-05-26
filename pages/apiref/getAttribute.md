import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/getAttribute'}>

### **getAttribute**
<br/>
<hr/>


The **getAttribute** function can be used to get an attribute value of a target element.
<br/>

##### Arguments

-   **attributes**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) or an [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of [Strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the attribute(s) for which the value should be returned.
- **path**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) value used to identify the target element in the DOM.
-   **options**: An optional [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the click function does. It can have the following properties:
    -   **method**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to control how the target element is searched. The default value of method is 'by_text'. Here are the supported values: 
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

if there is only one element found with the given path

- `attributesValues` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) either a single string containing the value of the attribute or if multiple attributes are requested then a stringified version of an object with all attributes.

if multiple elements found

- `response` ([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)) Array of `attributesValues`

<br/>

##### Examples

```javascript
1 getAttribute(["href"], '.d-table.table-fixed.col-12.width-full.py-4.border-bottom.border-gray-light [data-hovercard-type="user"]', {
2   method: "by_query_selector_all"
3 })
```

</DocBox>
