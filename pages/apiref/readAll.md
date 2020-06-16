import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/readAll'}>

### **readAll**
<hr/>
<br/>

The **readAll** function returns texts of all target elements which match the query.

<br/>

##### Arguments

-   **query**: A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) used to identify the target elements in the DOM. The query is run using a [query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). All elements satisfying the query are returned. 
-   **options**: An optional [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) used to control what the read function does. It can have the following properties:
    -   **retryDuration**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies after how many milliseconds the runtime will try to find the target element. The default value is 200. 
    -   **numberOfTries**: A [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) number which specifies how many times the script runner will try to find the target element. The default value is 10.

<br/>

##### Return

A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) that is stringified version of the array of values read.

<br/>

##### Examples


export const wb_script_1 = `readAll('.all_titles')`

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
