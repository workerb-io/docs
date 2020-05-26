import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/httpPost'}>


### **httpPost**
<br/>
<hr/>


The **httpPost** function can be used to make http [post](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) requests.
<br/>

##### Arguments

-   **path**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the URL where [post](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) request is made.
-   **data**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the payload for the request.
-   **headers**: An optional [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to specify the [headers](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header) for the request.

<br/>

##### Return

A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) which has the stringified version of an object which has two properties:
-  **response**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that has the response returned by the remote server.
-  **status**: A [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) that is the [Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) returned by the remote server.

<br/>

##### Examples

```javascript
1 httpPost('https://www.google.com', JSON.stringify({ 
2   'name': 'workerB' 
3 }), {
4   'content-type': 'application/json'
5 })
```


</DocBox>