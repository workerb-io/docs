import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/API Reference/download'}>

### **download**
<br/>
<hr/>

The **download** can be used to download data as part of the script.
<br/>

##### Arguments

-   **filename**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that specifies the name of the file.
-   **content**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that specifies the contents of the file.
-   **contentType**: A [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that specifies the contentType of the file. It can be either
    - 'text' for text files
    - Any valid mime type e.g 'text/plain;charset=utf-8'

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

```javascript
1 download("workerB.txt", "Use workerB to automate your browser tasks.", "text")
```
<br/>

</DocBox>
