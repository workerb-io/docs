import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/open'}>

### **open**
<hr/>
<br/>

The **open** function opens a link in the same browser window.

<br/>

##### Arguments

-  **url**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that specifies the link to open

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

export const wb_script_1 = `open('https://workerb.io/')`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    showRunButton={false}
/>

<br/>

##### Demos
-   [Google Search](/demos/googlesearch)
-   [Wikipedia](/demos/wikipedia)

</DocBox>