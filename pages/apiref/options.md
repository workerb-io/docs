import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/options'}>

### **Options**
<br/>
<hr/>

Options object is config used by some of the workerB functions to modify the behavior according to the given scenario. An option can consist of
-   `method` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) method used to query the DOM.
    -   `by_text` finds the target element by text value.
    -   `by_regex` finds the target element by regex.
    -   `by_id` finds the target element by id
    -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
    -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   `by_query_selector_all` finds all the elements using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   `by_label` finds the target input using a [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label). Only works with `type`.
    -   `by_placeholder` finds the target input using a [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefplaceholder). Only works with `type`.
-   `retryDuration` ([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)) interval at which the function will try to keep looking for the target element.

-   `numberOfTries` ([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)) number of time the function will try to find the element.

-   `expectReload` ([Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)) if set to true the script will pause the execution after successful exit of the function because the page is about to reload. Only works with `submit` and `click`

-   `path` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM. Only works with `type`.

</DocBox>