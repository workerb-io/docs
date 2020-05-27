import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/httpGet'}>

### **httpGet**
<hr/>
<br/>


The **httpGet** function can be used to make http [get](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) requests.
<br/>

##### Arguments

-   **path**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to specify the URL where [get](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) request is made.
-   **headers**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to specify the [headers](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header) for the request.

<br/>

##### Return

A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) which has the stringified version of an object which has two properties:
-  **response**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that has the response returned by the remote server.
-  **status**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) that is the [Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) returned by the remote server.

<br/>

##### Examples

```javascript
1 httpGet("https://www.google.com")
```

<br/>

##### Demos
-   [HTTP APIs](/demos/httpapis)

</DocBox>