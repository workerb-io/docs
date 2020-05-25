import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/event'}>

### **event**
<br/>
<hr/>

The **event** function generates an event on a target element.

<br/>

##### Arguments

-   **path**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) value used to identify the target element in the DOM.
-   **options**: is a config used by some workerB functions to modify behavior according to the given scenario. An option can consist of
    -   **method** ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) method used to query the DOM.
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
        -   `by_query_selector_all` finds all the elements using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

-   **eventConfig** ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) an object to customize event. It can consist of 
    - **eventType** ([Event type](https://developer.mozilla.org/en-US/docs/Web/API/Event/type)) the event name
    - **eventProps** ([KeyboardEventInit](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)) options for event.

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

```javascript
1 event("#s2id_project_namespace_id > a", {
2     method: "by_query_selector"
3 }, {
4     eventType: "mousedown"
5 })
```

<br/>

##### Demos

</DocBox>