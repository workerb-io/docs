import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API'}>


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
- `path` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** value used to identify the target element in the DOM.
-   `options` **([Options](#options))** the options object.

**Return**

if there is only one element found with the given path

- `attributesValues` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** either a single string containing the value of the attribute or if multiple attributes are requested then a stringified version of an object with all attributes.

if multiple elements found

- `response` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** Array of `attributesValues`

**Example**

```javascript
1 getAttribute(["href"], '.d-table.table-fixed.col-12.width-full.py-4.border-bottom.border-gray-light [data-hovercard-type="user"]', {
2   method: "by_query_selector_all"
3 })
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

</DocBox>
