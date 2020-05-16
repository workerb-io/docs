import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API'}>

### **Interact**
<br/>
<hr/>

#### **Options**

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



#### **open**

`open` opens a link in the same browser window.

**Arguments**

-   `URL` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) link to open

**Example**

```javascript
1 open('https://workerb.io/')
```

#### **tab**

`tab` opens a link in a new tab.

**Arguments**

-   `URL` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) link to open

**Example**

```javascript
1 tab('https://trello.com/')
```

#### **event**

`event` is used to invoke keyboard or mouse event on the target element.

**Arguments**

-   `path` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` ([Options](#options)) the options object.
-   `eventConfig` ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) an object to customize event. It can consist of 
    - `eventType` ([Event type](https://developer.mozilla.org/en-US/docs/Web/API/Event/type)) the event name
    - `eventProps` ([KeyboardEventInit](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)) options for event.

**Example**

```javascript
1 event("#s2id_project_namespace_id > a", {
2     method: "by_query_selector"
3 }, {
4     eventType: "mousedown"
5 })
```

#### **click**

`click` performs a mouse click on a target element. The element can be specified using different query methods.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` ([Options](#options)) the options object.

**Example**

```javascript
1 click('Run pipeline') // default lookup
2 click('Run pipeline', { // lookup by text value
3       method: 'by_text'
4 })
5 click('/html/body/div[3]/form/div[2]/div[1]/div[1]/a/img', { // lookup by xpath
6       method: 'by_xpath'
7 })
8 click('#element_Id', { method: 'by_query_selector' }) // lookup by query selector
```

#### **type**

`type` writes a given string to a target input field. The input field can be specified using different query methods.

**Arguments**

-   `text` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value that should be written to a target input field.
-   `path` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target element in the DOM.
-   `options` ([Options](#options)) the options object.
    -   If no path is provided in options config by default query fallback to label first if element not found then the function checks for placeholder

**Example**

```javascript
1 type('testuser', 'Username or email')
2 type('Automate your browser rituals', '#workerB_Input', {
3       method: 'by_query_selector'
4 })
```

#### **submit**

`submit` is used for simulating the enter keypress event in a form element. This can result in the submittion of the parent form.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target input field in the DOM.
-   `options` ([Options](#options)) the options object.

`submit` can be called without any arguments as well. In this case, the enter keypress event would be generated for the element with focus.

**Example**

```javascript
1 submit()
2 submit('#workerB_Input', {
3       method: 'by_query_selector'
4 })
```

</DocBox>
