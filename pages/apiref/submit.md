import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/submit'}>

### **submit**
<br/>
<hr/>

`submit` is used for simulating the enter keypress event in a form element. This can result in the submission of the parent form.

**Arguments**

-   `value` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) value used to identify the target input field in the DOM.
-   `options` the options object.

`submit` can be called without any arguments as well. In this case, the enter keypress event would be generated for the element with focus.

**Return**

null

**Example**

```javascript
1 submit()
2 submit('#workerB_Input', {
3       method: 'by_query_selector'
4 })
```

</DocBox>