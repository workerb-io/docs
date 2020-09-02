import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/logging'}>

### **logging**
<hr/>
<br/>

The **logging** function is used to enable and disable debug messages logging.

<br/>

##### Arguments

-   **state**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) with either 'on' or 'off' as a value to either enable or disable logging.

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

export const wb_script_1 = `logging('on')
click('New repository', { expectReload: true })
logging("off")`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    showRunButton={false}
/>


</DocBox>
