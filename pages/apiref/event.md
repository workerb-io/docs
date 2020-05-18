import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/event'}>

### **event**
<br/>
<hr/>

`event` is used to invoke keyboard or mouse event on the target element.

**Arguments**

-   `path` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` the options object.
-   `eventConfig` ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) an object to customize event. It can consist of 
    - `eventType` ([Event type](https://developer.mozilla.org/en-US/docs/Web/API/Event/type)) the event name
    - `eventProps` ([KeyboardEventInit](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)) options for event.

**Return**

null

**Example**

```javascript
1 event("#s2id_project_namespace_id > a", {
2     method: "by_query_selector"
3 }, {
4     eventType: "mousedown"
5 })
```

</DocBox>