import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/event'}>

### **event**
<hr/>
<br/>

The **event** function generates an event on a target element.

<br/>

##### Arguments

- **query**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) value used to identify the target element in the DOM.
- **eventConfig**: An [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to specify the event. It has the following properties:  
    - **eventType**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) value used to the specify the type of the event. Following values are supported: 
        - keydown
        - keyup
        - mousedown
        - mouseenter
        - mouseleave
        - mousemove
        - mouseout
        - mouseover
        - mouseup
    - **eventProps**: An [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to specify the event properties. For key related event types, [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent) is supported. For mouse related event types, [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent) is supported.
- **options**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the event function does. It can have the following properties: 
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

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

export const wb_script_1 = `event('#s2id_project_namespace_id > a', {
    'eventType': 'mousedown'
}, {
    'method': 'by_query_selector'
})
`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    showRunButton={false}
/>

<br/>

##### Demos

</DocBox>