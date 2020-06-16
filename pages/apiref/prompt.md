import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/prompt'}>

### **prompt**
<hr/>
<br/>

The **prompt** function opens a [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) to query user for input.

<br/>

##### Arguments

-  **label**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that specifies the message to show on the prompt

<br/>

##### Return

A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that has the user input.

<br/>

##### Examples

export const wb_script_1 = `var name = prompt("what is your name?")
log("hey " + name, 'blue')`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    showRunButton={false}
/>

<br/>

##### Demos
-   [Jenkins Build](/demos/jenkinsbuild)


</DocBox>
