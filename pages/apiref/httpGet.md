import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/httpGet'}>

### **httpGet**
<br/>
<hr/>

`httpGet` function makes a http `GET` request.


**Arguments**
-   `path`: URL to which we will send GET request.

**Return**

-   `response` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) stringified version of an object which has two properties
    -   `response` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) Actual response returned by end point
    -   `status` ([Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)) - The status code of the response

**Example**

```javascript
1 httpGet("https://www.google.com")
```

</DocBox>