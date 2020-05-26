import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/submit'}>

### **submit**
<br/>
<hr/>

The **submit** function generates an the 'enter' keypress event on a target form element. This can result in the submission of the parent form.

<br/>

##### Arguments

-   **value**:A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to identify the target element in the DOM.
-   **options**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the click function does. It can have the following properties:
    -   **method**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to control how the target element is searched. The default value of method is 'by_text'. Here are the supported values: 
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   **retryDuration**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies after how many milliseconds the runtime will try to find the target element. The default value is 200. 
    -   **numberOfTries**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) number which specifies how many times the script runner will try to find the target element. The default value is 10.
    -   **expectReload**: A [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) to indicate if script runner should expect the page to reload. If set to true, the script execution will pause after executing the click. It will resume after the page reloads. The default value is false.

The **submit** function can be called without any arguments as well. In this case, the enter keypress event would be generated for the element with focus.

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

```javascript
1 submit()
2 submit('#workerB_Input', {
3       method: 'by_query_selector'
4 })
```

<br/>

##### Demos
-   [Hello World](/demos/helloworld)

</DocBox>