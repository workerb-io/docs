import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/click'}>

### **click**
<hr/>
<br/>

The **click** function performs a mouse click on a target element. The element can be specified using different query methods.
<br/>

##### Arguments

-   **value**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to identify the target element in the DOM.
-   **options**: An optional object used to control what the click function does. The options object can consist of following actions:
    -   **method**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to control how the target element is searched. The default value of method is 'by_text'.
        -   `by_text` finds the target element by text value.
        -   `by_regex` finds the target element by regex.
        -   `by_id` finds the target element by id
        -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
        -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   **retryDuration**: A [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies how often the runtime will try to find the target element.

    -   **numberOfTries**: A [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) number which specifies how many times the script runner will try to find the target element. 

    -   **expectReload**: A [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) to indicate if script runner should expect the page to reload. If set to true, the script execution will pause after executing the click. It will resume after the page reloads.

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

```javascript
1 click('Run pipeline') // default lookup by_text
2 click('(\d+) branches', { // lookup by regex
3       method: 'by_regex'
4 })
5 click('/html/body/div[3]/form/div[2]/div[1]/div[1]/a/img', { // lookup by xpath
6       method: 'by_xpath'
7 })
8 click('#element_Id', {  // lookup by query selector
9       method: 'by_query_selector' 
10})
```

<br/>

##### Demos
-   [Hello World](/demos/helloworld)

</DocBox>