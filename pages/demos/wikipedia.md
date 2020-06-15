import DocBox from '~/components/docbox'
import WBeditor from 'wb-editor'

<DocBox title={'workerB | Docs/Demos/Wikipedia'}>

### **Wikipedia**
<hr/>
<br/>

In this demo, we open up a new tab, run a wikipedia search for Steve Jobs and download the results.

export const wb_script_1 = `var tabResult = runInTab(
    function () {
        open("https://en.wikipedia.org/wiki/Main_Page")
        click('#searchInput', { method: "by_query_selector" })
        type("steve jobs", '#searchInput', { method: 'by_query_selector' })
        submit('#searchInput', { expectReload: true })
        var tableTxt = readAll(".mw-parser-output > p")
        tableTxt = JSON.parse(tableTxt).join("\\n")
        return tableTxt
    }
)
    
download("wikipedia.txt", tabResult, "text")
`

<WBeditor
    code = {wb_script_1}
    readOnly = {true}
    showShareIcon={false}
/>

</DocBox>