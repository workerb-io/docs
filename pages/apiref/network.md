import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/Network'}>

### **Network**

<br/>
<hr/>

#### **httpGet**

`httpGet` function makes a http `GET` request.


**Arguments**
-   `path`: URL to which we will send GET request.

**Return**

-   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** stringified version of an object which has two properties
    -   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Actual response returned by end point
    -   `status` **([Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status))** - The status code of the response

**Example**

```javascript
1 httpGet("https://www.google.com")
```

<br/>
<hr/>

#### **httpPost**

`httpPost` is used to make http `POST` requests.

**Arguments**

-   `path` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** URL to which we will send POST request.
-   `data` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** payload to send with POST request.
-   `headers` **([HTTP Header](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header))** additional headers you want to send with request.

**Return**

-   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** stringified version of an object which has two properties
    -   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Actual response returned by end point
    -   `status` **([Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status))** - The status code of the response

**Example**

```javascript
1 httpPost("https://www.google.com", JSON.stringify({ name: "workerB" }), {"content-type": "application/json"})
```

#### **httpPut**

`httpPut` is used to make http `PUT` requests.

**Arguments**

-   `path` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** URL to which we will send `PUT` request.
-   `data` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** payload to send with `PUT` request.
-   `headers` **([HTTP Header](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header))** additional headers you want to send with request.

**Return**

-   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** stringified version of an object which has two properties
    -   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Actual response returned by end point
    -   `status` **([Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status))** - The status code of the response

**Example**

```javascript
1 httpPut("https://www.google.com", JSON.stringify({ name: "workerB" }), {"content-type": "application/json"})
```

#### **httpDelete**

`httpDelete` is used to make http `DELETE` requests.

**Arguments**

-   `path` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** URL to which we will send `DELETE` request.
-   `data` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** payload to send with `DELETE` request.
-   `headers` **([HTTP Header](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header))** additional headers you want to send with request.

**Return**

-   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** stringified version of an object which has two properties
    -   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Actual response returned by end point
    -   `status` **([Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status))** - The status code of the response

**Example**

```javascript
1 httpDelete("https://www.google.com", JSON.stringify({ name: "workerB" }), {"content-type": "application/json"})
```

</DocBox>
