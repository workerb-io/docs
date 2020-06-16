import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/download'}>

### **download**
<hr/>
<br/>

The **download** can be used to download data as part of the script.
<br/>

##### Arguments

-   **filename**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that specifies the name of the file.
-   **content**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that specifies the contents of the file. For non-text formats, the content can be passed as base-64 encoded string.
-   **contentType**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that specifies the contentType of the file. It can be either
    - 'text' for text files
    - Any valid mime type e.g 'text/plain;charset=utf-8'

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

export const wb_script_1 = `download("workerB.txt", "Use workerB to automate your browser tasks.", "text")`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    showRunButton={false}
/>

<br/>

##### Demos
-   [Wikipedia](/demos/wikipedia)


</DocBox>
