import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/type'}>

### **type**
<hr/>
<br/>

The **type** function writes a given string to a target input field. The input field can be specified using different query methods.
<br/>

##### Arguments

-   **text**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that should be written to a target input field.
-   **query**:A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to identify the target element in the DOM.
-   **options**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the click function does. It can have the following properties:
    -   **method**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to control how the target element is searched. The default value of method is 'by_label'. If an input element is not found, a search is performed using 'by_placeholder'. Here are the supported values: 
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
        -   `by_label` finds the target input using a [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).
        -   `by_placeholder` finds the target input using a [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefplaceholder).     
        -   `by_heuristic` finds the target input using [name attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
    -   **retryDuration**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies after how many milliseconds the runtime will try to find the target element. The default value is 200. 
    -   **numberOfTries**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) number which specifies how many times the script runner will try to find the target element. The default value is 10.

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

export const wb_script_1 = `type('testuser', 'Username or email')
type('Automate your browser rituals', '#workerB_Input', {
    method: 'by_query_selector'
})`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    showRunButton={false}
/>

<br/>

##### Demos
-   [Google Search](/demos/googlesearch)
-   [Wikipedia](/demos/wikipedia)

</DocBox>