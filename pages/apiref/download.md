import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/download'}>

### **download**
<br/>
<hr/>

`download` is used to download files.

**Arguments**

-   `filename` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) name of the file.
-   `content` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) content of the file.
-   `contentType` ([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) contentType of file. It can be either
    - `text` for text files
    - Any valid mime type for e.g `text/plain;charset=utf-8,`

**Return**

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

**Example**

```javascript
1 download("workerB.txt", "workerB is a wonderful tool to automate your browser tasks.", "text")
2 readTable("workerB.png", "<base 64 png>", "image/png;base64," })
```

</DocBox>
