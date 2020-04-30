import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Functions/actions'}>

#### **click**

`click` performs a mouse click on a target element. The element can be specified using different query methods.

**Arguments**

-   `value` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target element in the DOM.
-   `query` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** method used to query the DOM.
    -   `by_text` finds the target element by text value.
    -   `by_id` finds the target element by id
    -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
    -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

**Example**

```javascript
1 click('Run pipeline') // default lookup
2 click('Run pipeline', 'by_text') // lookup by text value
3 click('/html/body/div[3]/form/div[2]/div[1]/div[1]/a/img', 'by_xpath') // lookup by xpath
4 click('#element_Id', 'by_query_selector') // lookup by query selector
```

#### **type**

`type` writes a given string to a target input field. The input field can be specified using different query methods.

**Arguments**

-   `text` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value that should be written to a target input field.
-   `value` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target input field in the DOM.
-   `query` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** method used to query the DOM.
    -   `by_id` finds the target input by id
    -   `by_xpath` finds the target input by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
    -   `by_query_selector` finds the target input using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   `by_label` finds the target input using a [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
    -   `by_placeholder` finds the target input using a [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefplaceholder)
    -   **If no query is provided by default query fallback to label first if element not found then the function checks for placeholder**

**Example**

```javascript
1 type('testuser', 'Username or email')
2 type('Automate your browser rituals', '#workerB_Input', 'by_query_selector')
```

</DocBox>
