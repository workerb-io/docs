import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/setVars'}>

### **setVars**
<hr/>
<br/>

The **setVars** function sets required variables for a package, later package scripts can use those variables for various operations like authenticating the user.

<br/>

##### Arguments

-   **variables**: An [array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of Variable object. A Variable object can have these properties:
    -   **name**: A [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which will be used as a name of the variable.
    -   **value**: A [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which will be used as a value of the variable.
-   **options**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the setVars function does. It can have the following properties:
    -   **local**: A [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) used to control is variable should be saved local or workerB server.

<br/>

##### Return

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<br/>

##### Examples

export const wb_script_1 = `setVars([
    {
        name: "auth",
        value: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
    }
])
setVars([
    {
        name: "password",
        value: "workerB"
    }
], { local: true })`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
    showRunButton={false}
/>
</DocBox>
