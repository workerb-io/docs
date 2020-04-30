import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Functions/misc'}>

### **Functions**

**workerB** browser extension supports JaveScript functions which can be used to interact with the browser. These functions are developed to mimic how a user interacts on a site.

#### **Options**

Options object is config used by some of the workerB functions to modify the behavior according to the given scenario. An option can consist of
-   `method` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** method used to query the DOM.
    -   `by_text` finds the target element by text value.
    -   `by_regex` finds the target element by regex.
    -   `by_id` finds the target element by id
    -   `by_xpath` finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
    -   `by_query_selector` finds the target element using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   `by_query_selector_all` finds all the elements using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    -   `by_label` finds the target input using a [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label). Only works with `type`.
    -   `by_placeholder` finds the target input using a [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefplaceholder). Only works with `type`.
-   `retryDuration` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** interval at which the function will try to keep looking for the target element.

-   `numberOfTries` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** number of time the function will try to find the element.

-   `expectReload` **([Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean))** if set to true the script will pause the execution after successful exit of the function because the page is about to reload. Only works with `submit` and `click`

-   `path` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target element in the DOM. Only works with `type`.



#### **open**

`open` opens a link in the same browser window.

**Arguments**

-   `URL` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** link to open

**Example**

```javascript
1 open('https://workerb.io/')
```

#### **tab**

`tab` opens a link in a new tab.

**Arguments**

-   `URL` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** link to open

**Example**

```javascript
1 tab('https://trello.com/')
```

#### **click**

`click` performs a mouse click on a target element. The element can be specified using different query methods.

**Arguments**

-   `value` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target element in the DOM.
-   `options` **([Options](#options))** the options object.

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

-   `text` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value that should be written to a target input field.
-   `options` **([Options](#options))** the options object.
    -   **If no path is provided in options config by default query fallback to label first if element not found then the function checks for placeholder**

**Example**

```javascript
1 type('testuser', {path: 'Username or email'})
2 type('Automate your browser rituals', {
3       path: '#workerB_Input',
4       method: 'by_query_selector'
5 })
```

#### **submit**

`submit` is used for simulating the enter keypress event in a form element. This can result in the submittion of the parent form.

**Arguments**

-   `value` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target input field in the DOM.
-   `options` **([Options](#options))** the options object.

`submit` can be called without any arguments as well. In this case, the enter keypress event would be generated for the element with focus.

**Example**

```javascript
1 submit()
2 submit('#workerB_Input', {
3       method: 'by_query_selector'
4 })
```

#### **read**

`read` is used to get text of an element.

**Arguments**

-   `value` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target input field in the DOM.
-   `options` **([Options](#options))** the options object.

**Return**

-   `text` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** text inside an element or in case of input the value of the input.

**Example**

```javascript
1 read('#workerB_Input', {
2       method: 'by_query_selector'
3 })
```

#### **readAll**

`readAll` is used to get text of all the element matching given path.

**Arguments**

-   `value` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target input field in the DOM.
-   `options` **([Options](#options))** the options object.

**Return**

-   `text` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** stringified array of all the elements text.

**Example**

```javascript
1 readAll('.all_titles')
```

#### **notify**

`notify` is used for sending notification from user scripts to user.

**Arguments**

-   `message` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used as notification message.
-   `type` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used as notification type. Notification can be of two type
    -   success
    -   error
-   `timeout` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** value used as duration till the notification will be shown.

**Example**

```javascript
1 notify('this is a success notification', 'success', 3000)
2 notify('this is a error notification', 'error', 3000)
```

#### **log**

`log` is used to display logs throughout our script.

**Arguments**

-   `message` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value to display in log.
-   `color` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value to be used as the color of log.

**Example**

```javascript
1 log("this is a log", "blue")
```

#### **httpGet**

`httpGet` is used to make http `GET` requests.

**Arguments**

-   `path` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** URL to which we will send GET request.

**Return**

-   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** stringified version of an object which has two properties
    -   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Actual response returned by end point
    -   `status` **([Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status))** - The status code of the response

**Example**

```javascript
1 httpGet("https://www.google.com")
```

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

#### **readTable**

`readTable` is used to read the content of a table.

**Arguments**

-   `value` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target element in the DOM.
-   `options` **([Options](#options))** the options object.

**Return**

-   `response` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** stringified version of an object which has two properties
    -   `header` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** Array of strings which contains all the heading for columns
    -   `rows` **([Array](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status))** - Array of object where every key of a single object corresponds to a header from the header array. If `readTable` is not able to identify the correct column instead of using a column as a key `column{index}` will be used.

**Example**

```javascript
1 readTable(".table-to-read")
2 readTable("#table-to-read", {
3       method: "by_id"
4 })
```

#### **download**

`download` is used to download files.

**Arguments**

-   `filename` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** name of the file.
-   `content` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** content of the file.
-   `contentType` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** contentType of file. It can be either
    - `text` for text files
    - Any valid mime type for e.g `text/plain;charset=utf-8,`

**Example**

```javascript
1 download("workerB.txt", "workerB is a wonderful tool to automate your browser tasks.", "text")
2 readTable("workerB.png", "<base 64 png>", "image/png;base64," })
```

#### **readURL**

`readURL` is used to read the current active tab url.

**Return**

-   `url` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** current page url.

**Example**

```javascript
1 readTable(".table-to-read")
2 readTable("#table-to-read", {
3       method: "by_id"
4 })
```

#### **getAttribute**

`getAttribute` is used to get attribute value of the provided element.

**Arguments**

-   `attributes` (**([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))**|**([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))**) a single attribute or attribute array of which we want to get value of.
-   `options` **([Options](#options))** the options object.

**Return**

if there is only one element found with the given path

- `attributesValues` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** either a single string containing the value of the attribute or if multiple attributes are requested then a stringified version of an object with all attributes.

if multiple elements found

- `response` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** Array of `attributesValues`

**Example**

```javascript
1 getAttribute(["href"], {
2   path: '.d-table.table-fixed.col-12.width-full.py-4.border-bottom.border-gray-light [data-hovercard-type="user"]',
3   method: "by_query_selector_all"
4})
```

</DocBox>
