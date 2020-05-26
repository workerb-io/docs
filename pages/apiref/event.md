import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/event'}>

### **event**
<br/>
<hr/>

The **event** function generates an event on a target element.

<br/>

##### Arguments

- **path**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) value used to identify the target element in the DOM.
- **eventConfig**: An [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to specify the event. It has the following properties:  
    - **eventType**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) value used to the specify the type of the event. Following values are supported: 
        - keydown
        - keyup
        - mousedown
        - mouseenter
        - mouseleave
        - mousemove
        - mouseout
        - mouseover
        - mouseup
    - **eventProps**: An [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to specify the event properties. For key related event types, [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent) is supported. For mouse related event types, [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent) is supported.
- **options**: An optional [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the event function does. It can have the following properties: 
    -   **method**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to control how the target element is searched. The default value of method is 'by_query_selector'. Here are the supported values: 
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   **retryDuration**: A [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies how often the runtime will try to find the target element. The default value is 200 milliseconds.
    -   **numberOfTries**: A [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) number which specifies how many times the script runner will try to find the target element. The default value is 10.
    -   **expectReload**: A [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) to indicate if script runner should expect the page to reload. If set to true, the script execution will pause after executing the click. It will resume after the page reloads. The default value is false.

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

```javascript
1 event('#s2id_project_namespace_id > a', {
4     'eventType': 'mousedown'
5 }, {
2     'method': 'by_query_selector'
3 })
```

<br/>

##### Demos

</DocBox>