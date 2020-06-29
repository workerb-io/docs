import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/API Reference/runInTab'}>

### **runInTab**
<hr/>
<br/>

The **runInTab** function runs the specified function in a new tab and returns the result to the current tab.

<br/>

##### Arguments

-   **function**: A [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) which specifies the code that should be run in the new tab.
-   **keepOpen**: A [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) Keep the tab open after executing the function.

<br/>

##### Return

A [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) which is stringified version of the value returned by the passed function. 

<br/>

##### Examples

export const wb_script_1 = `var tabResult = runInTab(
    function () {
        open("https://cnn.com")
        click('#searchInput', { method: "by_query_selector" })
        type("steve jobs", '#searchInput', { method: 'by_query_selector' })
        submit('#searchInput', { expectReload: true })
        var tableTxt = readAll(".mw-parser-output > p")
        tableTxt = JSON.parse(tableTxt).join("\n")
        return tableTxt
    },
    true
)`

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
