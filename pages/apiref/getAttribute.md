import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/getAttribute'}>

### **getAttribute**
<hr/>
<br/>


The **getAttribute** function can be used to get an attribute value of a target element.
<br/>

##### Arguments

-   **attributes**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) or an [array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of [Strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the attribute(s) for which the value should be returned.
-   **query**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) value used to identify the target element in the DOM.
-   **options**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the click function does. It can have the following properties:
    -   **method**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to control how the target element is searched. The default value of method is 'by_text'. Here are the supported values: 
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
        -   `by_query_selector_all` finds all the elements using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)        
    -   **retryDuration**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies after how many milliseconds the runtime will try to find the target element. The default value is 200. 
    -   **numberOfTries**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) number which specifies how many times the script runner will try to find the target element. The default value is 10.

<br/>

##### Return

A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that is a stringified version of an [array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of [objects](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object). Each [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) corresponds to each element in the DOM that satisfied the query and it has the attribute name & values as properties for that element. 

<br/>

##### Examples

export const wb_script_1 =`getAttribute(["href"], '.d-table.table-fixed.col-12.width-full.py-4.border-bottom.border-gray-light [data-hovercard-type="user"]', {
    method: "by_query_selector_all"
})
`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    showRunButton={false}
/>

</DocBox>
