import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/httpPut'}>

### **httpPut**
<br/>
<hr/>

The **httpPut** function can be used to make http [put](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) requests.
<br/>

##### Arguments

-   **path**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the URL where [put](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) request is made.
-   **data**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the payload for the request.
-   **headers**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to specify the [headers](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header) for the request.

<br/>

##### Return

A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) which has the stringified version of an object which has two properties:
-  **response**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that has the response returned by the remote server.
-  **status**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) that is the [Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) returned by the remote server.

<br/>

##### Examples

```javascript
1 httpPut('https://www.google.com', JSON.stringify({ 
2   'name': 'workerB' 
3 }), {
4   'content-type': 'application/json'
5 })
```

</DocBox>